"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
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

  useEffect(() => { if (!isChecked && !isFinished) inputRef.current?.focus(); }, [currentIndex, isChecked, isFinished]);

  if (!wordList || wordList.length === 0) return <div className="p-6">로딩중...</div>;

  const current = wordList[currentIndex];
  const total = wordList.length;
  const pct = Math.round((currentIndex / total) * 100);

  const handleCheck = () => {
    if (!inputValue.trim()) return;
    const correct = inputValue.trim().toLowerCase() === current.english.trim().toLowerCase();
    setIsCorrect(correct); setIsChecked(true);
    if (correct) setScore(s => s + 1);
    else setWrongAnswers(p => [...p, { ...current, userInput: inputValue }]);
  };
  const handleNext = () => {
    if (currentIndex < total - 1) { setCurrentIndex(i => i + 1); setInputValue(""); setIsChecked(false); }
    else setIsFinished(true);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => { if (e.key === "Enter") { isChecked ? handleNext() : handleCheck(); } };
  const handleRetry = () => { setCurrentIndex(0); setInputValue(""); setIsChecked(false); setIsCorrect(false); setWrongAnswers([]); setIsFinished(false); setScore(0); };

  if (isFinished) {
    const scorePct = Math.round((score / total) * 100);
    return (
      <div className="flex flex-col min-h-screen px-5 py-6 animate-fade-in">
        <header className="flex items-center justify-between mb-6">
          <Link href="/" className="text-indigo-500 font-semibold text-sm">← 메인</Link>
          <h1 className="font-bold text-slate-700">학습 결과</h1>
          <div className="w-12" />
        </header>
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-8 text-center text-white shadow-xl mb-6">
          <div className="text-6xl mb-3">{scorePct >= 80 ? "🎉" : scorePct >= 50 ? "💪" : "📚"}</div>
          <div className="text-5xl font-extrabold mb-1">{scorePct}%</div>
          <p className="text-white/80 text-lg">{total}문제 중 {score}문제 정답</p>
        </div>
        {wrongAnswers.length > 0 && (
          <div className="mb-6">
            <h3 className="font-bold text-rose-500 mb-3 text-sm">❌ 틀린 단어 ({wrongAnswers.length}개)</h3>
            <div className="flex flex-col gap-2">
              {wrongAnswers.map((w, i) => (
                <div key={i} className="bg-rose-50 border border-rose-100 rounded-xl p-3 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-slate-700 text-sm">{w.korean}</p>
                    <p className="text-xs text-rose-400 line-through">{w.userInput}</p>
                  </div>
                  <p className="font-bold text-emerald-600">{w.english}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="mt-auto pb-4">
          <button onClick={handleRetry} className="w-full h-14 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-lg active:scale-[0.97] transition-transform">다시 학습하기</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen px-5 py-4">
      <header className="flex items-center justify-between mb-2 pt-2">
        <Link href="/" className="text-slate-400 text-sm font-medium">✕</Link>
        <span className="text-xs font-bold bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">{currentIndex + 1} / {total}</span>
      </header>

      <div className="relative w-full h-2 bg-slate-100 rounded-full mb-8 overflow-hidden">
        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center pb-24 animate-fade-in" key={currentIndex}>
        <div className="w-full bg-white rounded-2xl shadow-sm border-l-4 border-indigo-500 p-6 mb-8">
          <p className="text-xs text-indigo-400 font-bold mb-2 uppercase tracking-wider">한글 뜻</p>
          <h2 className="text-2xl font-extrabold text-slate-800 break-keep">{current.korean}</h2>
        </div>

        <div className="w-full mb-4">
          <input ref={inputRef} type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={handleKeyDown}
            disabled={isChecked} placeholder="영단어를 입력하세요" autoComplete="off" spellCheck="false" autoCapitalize="none"
            className={`w-full text-center text-xl font-semibold py-4 bg-transparent border-b-3 outline-none transition-all placeholder:text-slate-300
              ${isChecked ? (isCorrect ? 'border-emerald-500 text-emerald-600' : 'border-rose-500 text-rose-600') : 'border-slate-200 focus:border-indigo-500'}`}
          />
        </div>

        {isChecked && (
          <div className={`w-full rounded-2xl p-4 text-center animate-fade-in ${isCorrect ? 'bg-emerald-50 border border-emerald-200' : 'bg-rose-50 border border-rose-200'}`}>
            {isCorrect ? (
              <p className="text-emerald-600 font-bold text-lg">✅ 정답!</p>
            ) : (
              <div>
                <p className="text-rose-500 font-bold mb-1">오답</p>
                <p className="text-emerald-600 font-bold text-xl">{current.english}</p>
              </div>
            )}
          </div>
        )}
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 z-20">
        <div className="max-w-lg mx-auto">
          {!isChecked ? (
            <button onClick={handleCheck} disabled={!inputValue.trim()}
              className="w-full h-14 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-lg disabled:opacity-40 active:scale-[0.97] transition-all">확인</button>
          ) : (
            <button onClick={handleNext}
              className={`w-full h-14 text-white rounded-2xl font-bold text-lg shadow-lg active:scale-[0.97] transition-all ${isCorrect ? 'bg-gradient-to-r from-emerald-500 to-teal-600' : 'bg-gradient-to-r from-rose-500 to-pink-600'}`}>다음</button>
          )}
        </div>
      </div>
    </div>
  );
}
