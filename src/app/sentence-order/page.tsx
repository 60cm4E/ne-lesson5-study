"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { sentencePassages } from "@/data/sentences";

export default function SentenceOrderPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  const passage = sentencePassages?.[activeTab];
  const total = passage?.items.length || 0;
  const item = passage?.items[currentIndex];

  useEffect(() => { if (item) { setAvailableWords([...item.words]); setSelectedWords([]); setIsChecked(false); setIsCorrect(false); } }, [currentIndex, item, activeTab]);

  if (!sentencePassages || sentencePassages.length === 0) return <div className="p-6">로딩중...</div>;

  const handleSelect = (word: string, i: number) => { if (isChecked) return; setSelectedWords([...selectedWords, word]); const n = [...availableWords]; n.splice(i, 1); setAvailableWords(n); };
  const handleDeselect = (word: string, i: number) => { if (isChecked) return; const n = [...selectedWords]; n.splice(i, 1); setSelectedWords(n); setAvailableWords([...availableWords, word]); };
  const handleCheck = () => { const c = selectedWords.join(" ").trim().toLowerCase() === item.answer.trim().toLowerCase(); setIsCorrect(c); setIsChecked(true); if (c) setScore(s => s + 1); };
  const handleNext = () => { currentIndex < total - 1 ? setCurrentIndex(i => i + 1) : setIsFinished(true); };
  const handleTabChange = (i: number) => { setActiveTab(i); setCurrentIndex(0); setIsFinished(false); setScore(0); };

  if (isFinished) {
    return (
      <div className="flex flex-col min-h-screen px-5 py-6 animate-fade-in">
        <header className="flex items-center justify-between mb-6">
          <Link href="/" className="text-amber-500 font-semibold text-sm">← 메인</Link>
          <h1 className="font-bold text-slate-700">{passage.title} 결과</h1>
          <div className="w-12" />
        </header>
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl p-8 text-center text-white shadow-xl mb-6">
          <div className="text-6xl mb-3">🏆</div>
          <div className="text-5xl font-extrabold mb-1">{Math.round((score/total)*100)}%</div>
          <p className="text-white/80 text-lg">{total}문제 중 {score}문제 정답</p>
        </div>
        <div className="mt-auto pb-4">
          <button onClick={() => handleTabChange(activeTab)} className="w-full h-14 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl font-bold text-lg shadow-lg active:scale-[0.97]">다시 하기</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-5 pt-4 pb-2 flex items-center justify-between">
        <Link href="/" className="text-slate-400 text-sm font-medium">✕</Link>
        <span className="text-xs font-bold bg-amber-100 text-amber-600 px-3 py-1 rounded-full">{currentIndex + 1} / {total}</span>
      </header>

      <div className="flex gap-2 px-5 mb-3 hide-scrollbar overflow-x-auto">
        {sentencePassages.map((p, i) => (
          <button key={i} onClick={() => handleTabChange(i)}
            className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeTab === i ? 'bg-amber-500 text-white shadow-md' : 'bg-slate-100 text-slate-500'}`}>
            {p.title}
          </button>
        ))}
      </div>

      <div className="mx-5 h-1.5 bg-slate-100 rounded-full mb-4 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-500" style={{ width: `${(currentIndex/total)*100}%` }} />
      </div>

      <main className="flex-1 px-5 pb-28 animate-fade-in" key={`${activeTab}-${currentIndex}`}>
        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-4 mb-5">
          <p className="text-base font-bold text-slate-700 break-keep leading-relaxed">{item.korean}</p>
        </div>

        <div className={`min-h-[100px] p-4 rounded-2xl border-2 border-dashed flex flex-wrap gap-2 items-start content-start mb-5 transition-all
          ${isChecked ? (isCorrect ? 'border-emerald-400 bg-emerald-50' : 'border-rose-400 bg-rose-50') : 'border-amber-300 bg-amber-50/30'}`}>
          {item.prefix && <span className="py-2 text-slate-500 italic text-sm">{item.prefix}</span>}
          {selectedWords.map((w, i) => (
            <button key={i} onClick={() => handleDeselect(w, i)} disabled={isChecked}
              className="px-3 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg shadow-sm active:scale-95 transition-transform text-sm">{w}</button>
          ))}
          {item.suffix && <span className="py-2 text-slate-500 italic text-sm">{item.suffix}</span>}
          {selectedWords.length === 0 && !isChecked && <span className="text-slate-400 py-2 w-full text-center text-sm">👆 아래 단어를 순서대로 탭하세요</span>}
        </div>

        {isChecked && !isCorrect && (
          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 mb-5 animate-fade-in">
            <p className="text-xs text-emerald-600 font-bold mb-1">✅ 정답</p>
            <p className="font-medium text-emerald-800 text-sm">{item.prefix ? item.prefix + " " : ""}{item.answer}{item.suffix ? " " + item.suffix : ""}</p>
          </div>
        )}

        <div className="flex flex-wrap gap-2.5 justify-center">
          {availableWords.map((w, i) => (
            <button key={i} onClick={() => handleSelect(w, i)} disabled={isChecked}
              className="px-4 py-3 bg-white text-slate-700 font-semibold rounded-xl shadow-sm border border-slate-200 hover:border-amber-400 active:scale-95 transition-all min-h-[48px] text-sm">{w}</button>
          ))}
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 z-20">
        <div className="max-w-lg mx-auto">
          {!isChecked ? (
            <button onClick={handleCheck} disabled={availableWords.length > 0}
              className="w-full h-14 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl font-bold text-lg shadow-lg disabled:opacity-40 active:scale-[0.97] transition-all">확인</button>
          ) : (
            <button onClick={handleNext}
              className={`w-full h-14 text-white rounded-2xl font-bold text-lg shadow-lg active:scale-[0.97] transition-all ${isCorrect ? 'bg-gradient-to-r from-emerald-500 to-teal-600' : 'bg-gradient-to-r from-rose-500 to-pink-600'}`}>다음</button>
          )}
        </div>
      </div>
    </div>
  );
}
