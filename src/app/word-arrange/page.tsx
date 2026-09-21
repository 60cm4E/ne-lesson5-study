"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { sentencePassages } from "@/data/sentences";

export default function WordArrangePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [availableWords, setAvailableWords] = useState<string[]>([]);
  
  const [showHint, setShowHint] = useState(false);
  
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  const passage = sentencePassages?.[activeTab];
  const totalItems = passage?.items.length || 0;
  const currentItem = passage?.items[currentIndex];

  useEffect(() => {
    if (currentItem) {
      setAvailableWords([...currentItem.words]);
      setSelectedWords([]);
      setIsChecked(false);
      setIsCorrect(false);
      setShowHint(false);
    }
  }, [currentIndex, currentItem, activeTab]);

  if (!sentencePassages || sentencePassages.length === 0) {
    return <div className="p-6">데이터 로딩중...</div>;
  }

  const handleSelectWord = (word: string, index: number) => {
    if (isChecked) return;
    setSelectedWords([...selectedWords, word]);
    const newAvailable = [...availableWords];
    newAvailable.splice(index, 1);
    setAvailableWords(newAvailable);
  };

  const handleDeselectWord = (word: string, index: number) => {
    if (isChecked) return;
    const newSelected = [...selectedWords];
    newSelected.splice(index, 1);
    setSelectedWords(newSelected);
    setAvailableWords([...availableWords, word]);
  };

  const handleCheck = () => {
    const userAnswer = selectedWords.join(" ").trim().toLowerCase();
    const correct = userAnswer === currentItem.answer.trim().toLowerCase();
    setIsCorrect(correct);
    setIsChecked(true);
    if (correct) setScore(prev => prev + 1);
    setShowHint(true); // Always show translation after check
  };

  const handleNext = () => {
    if (currentIndex < totalItems - 1) {
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
          <Link href="/" className="text-blue-500 font-medium px-2 py-1 -ml-2 rounded">← 메인으로</Link>
          <h1 className="font-bold text-lg">결과 - {passage.title} (영단어 배열)</h1>
        </header>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center mb-6">
          <div className="text-5xl mb-4">🏆</div>
          <h2 className="text-2xl font-bold mb-2">{totalItems}문제 중 {score}문제 정답!</h2>
        </div>
        <div className="mt-auto pt-6 pb-6">
          <button onClick={() => handleTabChange(activeTab)} className="w-full h-14 bg-blue-500 text-white rounded-xl font-bold text-lg mb-3">다시 하기</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <header className="p-4 border-b border-slate-200 flex justify-between items-center bg-white sticky top-0 z-10">
        <Link href="/" className="text-slate-500 px-2 py-1 rounded">✕ 닫기</Link>
        <div className="font-medium text-slate-600">
          <span className="text-blue-500 font-bold">{currentIndex + 1}</span> / {totalItems}
        </div>
      </header>
      
      <div className="flex overflow-x-auto border-b border-slate-200 bg-white hide-scrollbar">
        {sentencePassages.map((p, i) => (
          <button key={i} onClick={() => handleTabChange(i)} className={`flex-shrink-0 px-5 py-3 font-medium text-sm transition-colors relative ${activeTab === i ? 'text-blue-600' : 'text-slate-400'}`}>
            {p.title}
            {activeTab === i && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500" />}
          </button>
        ))}
      </div>

      <div className="w-full bg-slate-200 h-1">
        <div className="bg-blue-500 h-full transition-all" style={{ width: `${(currentIndex / totalItems) * 100}%` }} />
      </div>

      <main className="flex-1 p-5 flex flex-col pt-6 pb-28">
        <div className="bg-white p-5 rounded-2xl mb-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-400 text-sm">해석</h3>
            <button 
              onClick={() => setShowHint(!showHint)}
              className="text-xs font-bold text-blue-500 bg-blue-50 px-3 py-1.5 rounded-full active:bg-blue-100 transition-colors"
            >
              {showHint ? '힌트 숨기기' : '힌트 보기'}
            </button>
          </div>
          
          <div className={`transition-all duration-300 overflow-hidden ${showHint ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0 mb-0'}`}>
            <p className="text-lg font-bold text-slate-800 break-keep leading-relaxed">{currentItem.korean}</p>
          </div>
          
          <div className={`min-h-[100px] p-4 rounded-xl border-2 flex flex-wrap gap-2 items-start content-start transition-colors ${isChecked ? (isCorrect ? 'border-green-400 bg-green-50' : 'border-red-400 bg-red-50') : 'border-blue-100 bg-blue-50/50'}`}>
            {currentItem.prefix && <span className="py-2 text-slate-700 font-medium">{currentItem.prefix}</span>}
            
            {selectedWords.map((word, i) => (
              <button key={i} onClick={() => handleDeselectWord(word, i)} disabled={isChecked} className="px-3 py-2 bg-white text-blue-700 font-medium rounded-lg shadow-sm border border-blue-200 active:scale-95 transition-transform">
                {word}
              </button>
            ))}
            
            {currentItem.suffix && <span className="py-2 text-slate-700 font-medium">{currentItem.suffix}</span>}
            
            {selectedWords.length === 0 && !isChecked && (
              <span className="text-slate-400 py-2 w-full text-center">단어를 순서대로 선택하세요</span>
            )}
          </div>
          
          {isChecked && !isCorrect && (
            <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-200">
              <p className="text-sm text-green-700 mb-1 font-bold">정답</p>
              <p className="font-medium text-green-800">
                {currentItem.prefix ? currentItem.prefix + " " : ""}
                {currentItem.answer}
                {currentItem.suffix ? " " + currentItem.suffix : ""}
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2.5 justify-center mt-auto">
          {availableWords.map((word, i) => (
            <button key={i} onClick={() => handleSelectWord(word, i)} disabled={isChecked} className="px-4 py-3 bg-white text-slate-700 font-medium rounded-xl shadow-sm border border-slate-200 hover:border-blue-300 hover:text-blue-600 active:scale-95 transition-all min-h-[48px]">
              {word}
            </button>
          ))}
        </div>
      </main>

      <div className="fixed bottom-0 w-full max-w-lg bg-white p-4 border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-20">
        {!isChecked ? (
          <button onClick={handleCheck} disabled={availableWords.length > 0} className="w-full h-14 bg-slate-800 text-white rounded-xl font-bold text-lg disabled:opacity-50">확인</button>
        ) : (
          <button onClick={handleNext} className={`w-full h-14 text-white rounded-xl font-bold text-lg ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>다음</button>
        )}
      </div>
    </div>
  );
}
