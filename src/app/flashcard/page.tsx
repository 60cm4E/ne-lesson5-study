"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { wordList } from "@/data/words";

export default function FlashcardPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [knownCount, setKnownCount] = useState(0);
  const [reviewList, setReviewList] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const total = wordList.length;
  const current = wordList[currentIndex];

  const handleReveal = useCallback(() => { setIsRevealed(true); }, []);
  
  const handleKnown = () => {
    setKnownCount(k => k + 1);
    goNext();
  };

  const handleReviewLater = () => {
    setReviewList(r => [...r, currentIndex]);
    goNext();
  };

  const goNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex(i => i + 1);
      setIsRevealed(false);
    } else {
      setIsFinished(true);
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === "Space") { e.preventDefault(); if (!isRevealed) handleReveal(); }
      if (e.code === "ArrowRight" || e.code === "Enter") { if (isRevealed) handleKnown(); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  const handleRetry = () => { setCurrentIndex(0); setIsRevealed(false); setKnownCount(0); setReviewList([]); setIsFinished(false); };

  if (isFinished) {
    return (
      <div className="flex flex-col min-h-screen px-5 py-6 animate-fade-in">
        <header className="flex items-center justify-between mb-6">
          <Link href="/" className="text-lime-500 font-semibold text-sm">← 메인</Link>
          <h1 className="font-bold text-slate-700">암기 결과</h1>
          <div className="w-12" />
        </header>
        <div className="bg-gradient-to-br from-lime-500 to-green-600 rounded-3xl p-8 text-center text-white shadow-xl mb-6">
          <div className="text-6xl mb-3">🧠</div>
          <div className="text-5xl font-extrabold mb-1">{knownCount}<span className="text-2xl text-white/70">/{total}</span></div>
          <p className="text-white/80 text-lg mt-2">외운 단어</p>
        </div>
        {reviewList.length > 0 && (
          <div className="mb-6">
            <h3 className="font-bold text-amber-500 mb-3 text-sm">📌 복습 필요 ({reviewList.length}개)</h3>
            <div className="flex flex-col gap-2">
              {reviewList.map((idx, i) => (
                <div key={i} className="bg-amber-50 border border-amber-100 rounded-xl p-3 flex justify-between items-center">
                  <p className="font-bold text-slate-700">{wordList[idx].english}</p>
                  <p className="text-slate-500 text-sm">{wordList[idx].korean}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mt-auto pb-4">
          <button onClick={handleRetry} className="w-full h-14 bg-gradient-to-r from-lime-500 to-green-600 text-white rounded-2xl font-bold text-lg shadow-lg active:scale-[0.97] transition-transform">다시 학습하기</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen px-5 py-4">
      <header className="flex items-center justify-between mb-4 pt-2">
        <Link href="/" className="text-slate-400 text-sm font-medium">✕</Link>
        <div className="flex items-center gap-2">
          <span className="text-lime-500 font-bold">✓ {knownCount}</span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-500 font-medium">{total}</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center pb-20 animate-fade-in" key={currentIndex}>
        {/* Card */}
        <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden" onClick={() => !isRevealed && handleReveal()}>
          {/* Top - English word */}
          <div className="p-8 pb-6">
            <div className="flex items-center justify-between text-slate-400 text-sm mb-6">
              <span>🔊</span>
              <span>☆</span>
              <span className="text-xs text-slate-400">학습중...</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-800">{current.english}</h2>
          </div>
          
          {/* Bottom - Korean meaning or cover */}
          {!isRevealed ? (
            <div className="bg-gradient-to-br from-lime-400 to-green-500 p-8 cursor-pointer min-h-[160px] flex flex-col items-center justify-center">
              <p className="text-white font-bold text-lg mb-2">탭하여 의미를 확인하세요</p>
              <p className="text-white/70 text-sm">Tap to reveal</p>
            </div>
          ) : (
            <div className="p-8 border-t border-slate-100 min-h-[160px] flex items-center">
              <p className="text-2xl font-bold text-slate-700 break-keep leading-relaxed">{current.korean}</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        {!isRevealed ? (
          <div className="mt-6 text-right w-full">
            <button onClick={goNext} className="text-slate-400 text-sm font-medium active:text-slate-600">다음 이동 →</button>
          </div>
        ) : (
          <div className="mt-6 w-full">
            <div className="text-right mb-4">
              <button onClick={handleKnown} className="text-slate-400 text-sm font-medium active:text-slate-600">다음 이동 →</button>
            </div>
            <div className="flex gap-3">
              <button onClick={handleKnown} className="flex-1 h-14 bg-gradient-to-r from-lime-400 to-green-500 text-white rounded-2xl font-bold text-lg shadow-lg active:scale-[0.97] transition-transform">
                ✓ 이제 알아요
              </button>
              <button onClick={handleReviewLater} className="flex-1 h-14 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-bold text-lg active:scale-[0.97] transition-transform">
                나중에 한번 더
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
