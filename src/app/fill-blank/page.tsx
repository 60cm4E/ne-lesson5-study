"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { passages } from "@/data/fillBlank";

export default function FillBlankPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputs, setInputs] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [results, setResults] = useState<boolean[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const passage = passages?.[activeTab];
  const total = passage?.items.length || 0;
  const item = passage?.items[currentIndex];

  useEffect(() => {
    if (item) { setInputs(Array(item.answers.length).fill("")); setIsChecked(false); setResults([]); setTimeout(() => inputRefs.current[0]?.focus(), 50); }
  }, [currentIndex, item, activeTab]);

  if (!passages || passages.length === 0) return <div className="p-6">로딩중...</div>;

  const handleInputChange = (i: number, v: string) => { const n = [...inputs]; n[i] = v; setInputs(n); };
  const handleCheck = () => {
    if (!item) return;
    const r = inputs.map((v, i) => v.trim().toLowerCase() === item.answers[i].trim().toLowerCase());
    setResults(r); setIsChecked(true);
    if (r.every(x => x)) setScore(s => s + 1);
  };
  const handleNext = () => { currentIndex < total - 1 ? setCurrentIndex(i => i + 1) : setIsFinished(true); };
  const handleTabChange = (i: number) => { setActiveTab(i); setCurrentIndex(0); setIsFinished(false); setScore(0); };

  const parts = item?.sentence.split("___BLANK___") || [];

  if (isFinished) {
    return (
      <div className="flex flex-col min-h-screen px-5 py-6 animate-fade-in">
        <header className="flex items-center justify-between mb-6">
          <Link href="/" className="text-emerald-500 font-semibold text-sm">← 메인</Link>
          <h1 className="font-bold text-slate-700">{passage.title} 결과</h1>
          <div className="w-12" />
        </header>
        <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 text-center text-white shadow-xl mb-6">
          <div className="text-6xl mb-3">🏆</div>
          <div className="text-5xl font-extrabold mb-1">{Math.round((score/total)*100)}%</div>
          <p className="text-white/80 text-lg">{total}문장 중 {score}문장 정답</p>
        </div>
        <div className="mt-auto pb-4 flex flex-col gap-3">
          <button onClick={() => handleTabChange(activeTab)} className="w-full h-14 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-bold text-lg shadow-lg active:scale-[0.97]">다시 하기</button>
          {activeTab < passages.length - 1 && (
            <button onClick={() => handleTabChange(activeTab + 1)} className="w-full h-13 bg-slate-800 text-white rounded-2xl font-bold active:scale-[0.97]">다음 본문 →</button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-5 pt-4 pb-2 flex items-center justify-between">
        <Link href="/" className="text-slate-400 text-sm font-medium">✕</Link>
        <span className="text-xs font-bold bg-emerald-100 text-emerald-600 px-3 py-1 rounded-full">{currentIndex + 1} / {total}</span>
      </header>

      <div className="flex gap-2 px-5 mb-3 hide-scrollbar overflow-x-auto">
        {passages.map((p, i) => (
          <button key={i} onClick={() => handleTabChange(i)}
            className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeTab === i ? 'bg-emerald-500 text-white shadow-md' : 'bg-slate-100 text-slate-500'}`}>
            {p.title}
          </button>
        ))}
      </div>

      <div className="mx-5 h-1.5 bg-slate-100 rounded-full mb-4 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500" style={{ width: `${(currentIndex/total)*100}%` }} />
      </div>

      <main className="flex-1 px-5 pb-24 animate-fade-in" key={`${activeTab}-${currentIndex}`}>
        <div className="bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl p-4 mb-5">
          <p className="text-base font-bold text-slate-700 break-keep leading-relaxed">{item?.korean}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
          <div className="text-lg leading-loose text-slate-800 font-medium">
            {parts.map((part, i) => (
              <span key={i}>
                {part}
                {i < parts.length - 1 && (
                  <span className="inline-block relative mx-0.5 align-baseline">
                    <input ref={el => { inputRefs.current[i] = el; }} type="text" value={inputs[i] || ""} onChange={e => handleInputChange(i, e.target.value)}
                      disabled={isChecked} autoComplete="off" spellCheck="false"
                      className={`h-9 px-1 text-center font-bold border-b-2 bg-transparent outline-none transition-all text-lg
                        ${isChecked ? (results[i] ? 'border-emerald-500 text-emerald-600' : 'border-rose-500 text-rose-500') : 'border-indigo-300 focus:border-indigo-500'}`}
                      style={{ width: `${Math.max(3, (item?.answers[i]?.length || 3)) * 0.85}rem` }}
                    />
                    {isChecked && !results[i] && (
                      <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs font-bold text-emerald-500 whitespace-nowrap">{item?.answers[i]}</span>
                    )}
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 z-20">
        <div className="max-w-lg mx-auto">
          {!isChecked ? (
            <button onClick={handleCheck} disabled={inputs.some(v => !v.trim())}
              className="w-full h-14 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-bold text-lg shadow-lg disabled:opacity-40 active:scale-[0.97] transition-all">확인</button>
          ) : (
            <button onClick={handleNext}
              className={`w-full h-14 text-white rounded-2xl font-bold text-lg shadow-lg active:scale-[0.97] transition-all ${results.every(r=>r) ? 'bg-gradient-to-r from-emerald-500 to-teal-600' : 'bg-gradient-to-r from-rose-500 to-pink-600'}`}>다음</button>
          )}
        </div>
      </div>
    </div>
  );
}
