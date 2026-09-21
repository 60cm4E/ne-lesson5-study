"use client";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { wordList } from "@/data/words";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

function getChoices(correctIdx: number): { text: string; correct: boolean }[] {
  const correct = wordList[correctIdx].korean;
  const others = wordList.filter((_, i) => i !== correctIdx).map(w => w.korean);
  const wrongChoices = shuffle(others).slice(0, 3);
  return shuffle([
    { text: correct, correct: true },
    ...wrongChoices.map(t => ({ text: t, correct: false }))
  ]);
}

export default function RecallPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [knownCount, setKnownCount] = useState(0);
  const [wrongList, setWrongList] = useState<number[]>([]);
  const [isFinished, setIsFinished] = useState(false);

  const total = wordList.length;
  const current = wordList[currentIndex];

  const choices = useMemo(() => getChoices(currentIndex), [currentIndex]);

  const handleSelect = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (choices[idx].correct) {
      setKnownCount(k => k + 1);
    } else {
      setWrongList(w => [...w, currentIndex]);
    }
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex(i => i + 1);
      setSelected(null);
    } else {
      setIsFinished(true);
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selected === null) {
        if (e.key >= "1" && e.key <= "4") { const idx = parseInt(e.key) - 1; if (idx < choices.length) handleSelect(idx); }
      } else {
        if (e.code === "Space" || e.code === "Enter" || e.code === "ArrowRight") { e.preventDefault(); handleNext(); }
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  const handleRetry = () => { setCurrentIndex(0); setSelected(null); setKnownCount(0); setWrongList([]); setIsFinished(false); };

  if (isFinished) {
    const pct = Math.round((knownCount / total) * 100);
    return (
      <div className="flex flex-col min-h-screen px-5 py-6 animate-fade-in">
        <header className="flex items-center justify-between mb-6">
          <Link href="/" className="text-cyan-500 font-semibold text-sm">← 메인</Link>
          <h1 className="font-bold text-slate-700">리콜 결과</h1>
          <div className="w-12" />
        </header>
        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-8 text-center text-white shadow-xl mb-6">
          <div className="text-6xl mb-3">{pct >= 80 ? "🎉" : pct >= 50 ? "💪" : "📚"}</div>
          <div className="text-5xl font-extrabold mb-1">{pct}%</div>
          <p className="text-white/80 text-lg">{total}문제 중 {knownCount}문제 정답</p>
        </div>
        {wrongList.length > 0 && (
          <div className="mb-6">
            <h3 className="font-bold text-rose-500 mb-3 text-sm">❌ 틀린 단어 ({wrongList.length}개)</h3>
            <div className="flex flex-col gap-2">
              {wrongList.map((idx, i) => (
                <div key={i} className="bg-rose-50 border border-rose-100 rounded-xl p-3 flex justify-between items-center">
                  <p className="font-bold text-slate-700">{wordList[idx].english}</p>
                  <p className="text-slate-500 text-sm">{wordList[idx].korean}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mt-auto pb-4">
          <button onClick={handleRetry} className="w-full h-14 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-bold text-lg shadow-lg active:scale-[0.97] transition-transform">다시 학습하기</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen px-5 py-4">
      <header className="flex items-center justify-between mb-4 pt-2">
        <Link href="/" className="text-slate-400 text-sm font-medium">✕</Link>
        <div className="flex items-center gap-2">
          <span className="text-cyan-500 font-bold">✓ {knownCount}</span>
          <span className="text-slate-400">|</span>
          <span className="text-slate-500 font-medium">{total}</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center pb-10 animate-fade-in" key={currentIndex}>
        {/* Card */}
        <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
          <div className="p-8 pb-6">
            <div className="flex items-center justify-between text-slate-400 text-sm mb-6">
              <span>🔊</span>
              <span>☆</span>
              <span className="text-xs text-slate-400">학습중...</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-800">{current.english}</h2>
          </div>

          {/* Choices */}
          <div className="border-t border-slate-100">
            {choices.map((c, i) => {
              let bg = "hover:bg-slate-50";
              if (selected !== null) {
                if (c.correct) bg = "bg-lime-50 border-l-4 border-l-lime-500";
                else if (i === selected && !c.correct) bg = "bg-rose-50 border-l-4 border-l-rose-500";
              }
              return (
                <button key={i} onClick={() => handleSelect(i)} disabled={selected !== null}
                  className={`w-full text-left px-6 py-4 border-b border-slate-100 last:border-b-0 flex items-center gap-4 transition-all ${bg}`}>
                  <span className={`w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold
                    ${selected !== null && c.correct ? 'bg-lime-500 text-white' : selected === i && !c.correct ? 'bg-rose-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {i + 1}
                  </span>
                  <span className={`text-lg font-medium ${selected !== null && c.correct ? 'text-lime-700' : selected === i && !c.correct ? 'text-rose-500 line-through' : 'text-slate-700'}`}>
                    {c.text}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {selected !== null && (
          <button onClick={handleNext}
            className={`w-full h-14 text-white rounded-2xl font-bold text-lg shadow-lg active:scale-[0.97] transition-all animate-fade-in
              ${choices[selected].correct ? 'bg-gradient-to-r from-lime-500 to-green-600' : 'bg-gradient-to-r from-rose-500 to-pink-600'}`}>
            {currentIndex < total - 1 ? "다음" : "결과 보기"}
          </button>
        )}

        <p className="text-slate-400 text-xs mt-4">키보드로 숫자를 선택할 수 있습니다.</p>
      </main>
    </div>
  );
}
