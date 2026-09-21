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
  const totalSentences = passage?.items.length || 0;
  const currentItem = passage?.items[currentIndex];

  useEffect(() => {
    if (currentItem) {
      setInputs(Array(currentItem.answers.length).fill(""));
      setIsChecked(false);
      setResults([]);
      setTimeout(() => {
        if (inputRefs.current[0]) inputRefs.current[0].focus();
      }, 50);
    }
  }, [currentIndex, currentItem, activeTab]);

  if (!passages || passages.length === 0) {
    return <div className="p-6">데이터를 불러오는 중입니다...</div>;
  }

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleCheck = () => {
    if (!currentItem) return;
    const newResults = inputs.map((input, i) => 
      input.trim().toLowerCase() === currentItem.answers[i].trim().toLowerCase()
    );
    setResults(newResults);
    setIsChecked(true);
    
    if (newResults.every(r => r)) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalSentences - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    setCurrentIndex(0);
    setIsFinished(false);
    setScore(0);
  };

  if (isFinished) {
    return (
      <div className="p-6 flex flex-col min-h-screen">
        <header className="flex justify-between items-center mb-8 pt-4">
          <Link href="/" className="text-blue-500 font-medium px-2 py-1 -ml-2 rounded active:bg-blue-50">← 메인으로</Link>
          <h1 className="font-bold text-lg">학습 결과 - {passage.title}</h1>
        </header>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center mb-6">
          <div className="text-5xl mb-4">🏆</div>
          <h2 className="text-2xl font-bold mb-2">총 {totalSentences}문장 중 {score}문장 정답!</h2>
        </div>
        <div className="mt-auto pt-6 pb-6">
          <button onClick={() => handleTabChange(activeTab)} className="w-full h-14 bg-blue-500 text-white rounded-xl font-bold text-lg mb-3">다시 학습하기</button>
          {activeTab < passages.length - 1 && (
            <button onClick={() => handleTabChange(activeTab + 1)} className="w-full h-14 bg-slate-800 text-white rounded-xl font-bold text-lg">다음 본문 학습하기</button>
          )}
        </div>
      </div>
    );
  }

  const parts = currentItem?.sentence.split("___BLANK___") || [];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-10">
        <Link href="/" className="text-slate-500 px-2 py-1 rounded">✕ 닫기</Link>
        <div className="font-medium text-slate-600">
          <span className="text-blue-500 font-bold">{currentIndex + 1}</span> / {totalSentences}
        </div>
      </header>

      <div className="flex overflow-x-auto border-b border-slate-100 bg-white hide-scrollbar">
        {passages.map((p, i) => (
          <button key={i} onClick={() => handleTabChange(i)} className={`flex-shrink-0 px-5 py-3 font-medium text-sm transition-colors relative ${activeTab === i ? 'text-blue-600' : 'text-slate-400'}`}>
            {p.title}
            {activeTab === i && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500" />}
          </button>
        ))}
      </div>

      <div className="w-full bg-slate-100 h-1">
        <div className="bg-blue-500 h-full transition-all" style={{ width: `${(currentIndex / totalSentences) * 100}%` }} />
      </div>

      <main className="flex-1 p-6 flex flex-col pt-8 pb-24">
        <div className="bg-blue-50 p-4 rounded-xl mb-8 border border-blue-100">
          <p className="text-lg font-medium text-slate-800 leading-relaxed break-keep">{currentItem?.korean}</p>
        </div>

        <div className="text-xl leading-loose font-medium text-slate-800">
          {parts.map((part, i) => (
            <span key={i}>
              {part}
              {i < parts.length - 1 && (
                <span className="inline-block relative align-middle mx-1">
                  <input
                    ref={el => { inputRefs.current[i] = el; }}
                    type="text"
                    value={inputs[i] || ""}
                    onChange={e => handleInputChange(i, e.target.value)}
                    disabled={isChecked}
                    className={`h-10 px-2 border-b-2 text-center focus:outline-none bg-transparent transition-colors ${isChecked ? (results[i] ? 'border-green-500 text-green-600 font-bold' : 'border-red-500 text-red-600') : 'border-slate-300 focus:border-blue-500'}`}
                    style={{ width: `${Math.max(3, currentItem.answers[i].length) * 1.2}rem` }}
                    autoComplete="off"
                    spellCheck="false"
                  />
                  {isChecked && !results[i] && (
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm font-bold text-green-500 whitespace-nowrap">
                      {currentItem.answers[i]}
                    </span>
                  )}
                </span>
              )}
            </span>
          ))}
        </div>
      </main>

      <div className="fixed bottom-0 w-full max-w-lg bg-white p-4 border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        {!isChecked ? (
          <button onClick={handleCheck} disabled={inputs.some(v => !v.trim())} className="w-full h-14 bg-slate-800 text-white rounded-xl font-bold text-lg disabled:opacity-50">확인</button>
        ) : (
          <button onClick={handleNext} className={`w-full h-14 text-white rounded-xl font-bold text-lg ${results.every(r => r) ? 'bg-green-500' : 'bg-red-500'}`}>다음</button>
        )}
      </div>
    </div>
  );
}
