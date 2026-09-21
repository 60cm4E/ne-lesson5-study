"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
// We use type any or default mock until data is ready
import { wordList } from "@/data/words";

export default function WordTestPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState<any[]>([]);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto focus input
  useEffect(() => {
    if (!isChecked && !isFinished) {
      inputRef.current?.focus();
    }
  }, [currentIndex, isChecked, isFinished]);

  if (!wordList || wordList.length === 0) {
    return <div className="p-6">데이터를 불러오는 중입니다...</div>;
  }

  const currentWord = wordList[currentIndex];
  const totalWords = wordList.length;

  const handleCheck = () => {
    if (!inputValue.trim()) return;
    
    const correct = inputValue.trim().toLowerCase() === currentWord.english.trim().toLowerCase();
    setIsCorrect(correct);
    setIsChecked(true);
    
    if (correct) {
      setScore(prev => prev + 1);
    } else {
      setWrongAnswers(prev => [...prev, { ...currentWord, userInput: inputValue }]);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalWords - 1) {
      setCurrentIndex(prev => prev + 1);
      setInputValue("");
      setIsChecked(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (isChecked) {
        handleNext();
      } else {
        handleCheck();
      }
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setInputValue("");
    setIsChecked(false);
    setIsCorrect(false);
    setWrongAnswers([]);
    setIsFinished(false);
    setScore(0);
  };

  if (isFinished) {
    return (
      <div className="p-6 flex flex-col min-h-screen">
        <header className="flex justify-between items-center mb-8 pt-4">
          <Link href="/" className="text-blue-500 font-medium px-2 py-1 -ml-2 rounded active:bg-blue-50">← 메인으로</Link>
          <h1 className="font-bold text-lg">학습 결과</h1>
        </header>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 text-center mb-6">
          <div className="text-5xl mb-4">🏆</div>
          <h2 className="text-2xl font-bold mb-2">총 {totalWords}문제 중 {score}문제 정답!</h2>
          <p className="text-slate-500 text-lg">정답률: {Math.round((score / totalWords) * 100)}%</p>
        </div>

        {wrongAnswers.length > 0 && (
          <div className="mb-8">
            <h3 className="font-bold text-lg mb-4 text-red-500">틀린 단어 복습 ({wrongAnswers.length}개)</h3>
            <div className="flex flex-col gap-3">
              {wrongAnswers.map((w, i) => (
                <div key={i} className="bg-red-50 p-4 rounded-xl border border-red-100 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-slate-800">{w.korean}</p>
                    <p className="text-sm text-red-500 line-through mt-1">{w.userInput}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-green-600 text-lg">{w.english}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto pt-6 pb-6">
          <button 
            onClick={handleRetry}
            className="w-full h-14 bg-blue-500 text-white rounded-xl font-bold text-lg hover:bg-blue-600 active:scale-[0.98] transition-all"
          >
            다시 학습하기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen p-6">
      <header className="flex justify-between items-center mb-6 pt-4">
        <Link href="/" className="text-slate-500 px-2 py-1 -ml-2 rounded active:bg-slate-100">✕ 닫기</Link>
        <div className="font-medium text-slate-600">
          <span className="text-blue-500 font-bold">{currentIndex + 1}</span> / {totalWords}
        </div>
      </header>

      {/* Progress bar */}
      <div className="w-full bg-slate-100 h-2 rounded-full mb-10 overflow-hidden">
        <div 
          className="bg-blue-500 h-full transition-all duration-300 ease-out" 
          style={{ width: `${((currentIndex) / totalWords) * 100}%` }}
        />
      </div>

      <main className="flex-1 flex flex-col justify-center max-w-sm w-full mx-auto pb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 break-keep">{currentWord.korean}</h2>
        </div>

        <div className="mb-6 relative">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isChecked}
            placeholder="영단어를 입력하세요"
            className={`w-full text-center h-16 text-xl font-medium border-2 rounded-2xl focus:outline-none transition-colors
              ${isChecked 
                ? isCorrect 
                  ? 'border-green-500 bg-green-50 text-green-700' 
                  : 'border-red-500 bg-red-50 text-red-700'
                : 'border-slate-200 focus:border-blue-500 focus:bg-blue-50'
              }`}
            autoComplete="off"
            spellCheck="false"
            autoCapitalize="none"
          />
        </div>

        {isChecked && !isCorrect && (
          <div className="text-center mb-6 animate-fade-in">
            <p className="text-sm text-slate-500 mb-1">정답은</p>
            <p className="text-2xl font-bold text-green-500">{currentWord.english}</p>
          </div>
        )}

        <div className="mt-4">
          {!isChecked ? (
            <button
              onClick={handleCheck}
              disabled={!inputValue.trim()}
              className="w-full h-14 bg-slate-800 text-white rounded-xl font-bold text-lg hover:bg-slate-700 active:scale-[0.98] transition-all disabled:opacity-50 disabled:active:scale-100"
            >
              확인
            </button>
          ) : (
            <button
              onClick={handleNext}
              className={`w-full h-14 text-white rounded-xl font-bold text-lg active:scale-[0.98] transition-all
                ${isCorrect ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}
              `}
            >
              다음
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
