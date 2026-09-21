'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-6 min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100 animate-fade-in">
      <header className="mb-10 mt-8 text-center">
        <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-4 animate-bounce-gentle">
          <span className="text-5xl">🎓</span>
        </div>
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-2">
          능실중 3학년 5과
        </h1>
        <p className="text-slate-500 font-medium text-lg">수행평가 마스터하기 🚀</p>
      </header>

      <div className="flex-1 flex flex-col gap-5">
        <Link href="/word-test" className="group">
          <div className="relative p-6 rounded-3xl bg-gradient-to-br from-indigo-500 to-indigo-700 text-white shadow-lg shadow-indigo-200 transition-transform active:scale-95 overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-10 rounded-full blur-xl"></div>
            <div className="flex justify-between items-center relative z-10">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">📝</span>
                  <h2 className="text-xl font-bold">영단어 쓰기</h2>
                </div>
                <p className="text-indigo-100 text-sm font-medium">단어 스펠링을 완벽하게!</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="bg-indigo-900/30 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                  107문제
                </span>
                <span className="text-2xl group-hover:translate-x-1 transition-transform">➔</span>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/fill-blank" className="group">
          <div className="relative p-6 rounded-3xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white shadow-lg shadow-emerald-200 transition-transform active:scale-95 overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-10 rounded-full blur-xl"></div>
            <div className="flex justify-between items-center relative z-10">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">📖</span>
                  <h2 className="text-xl font-bold">빈칸 채우기</h2>
                </div>
                <p className="text-emerald-50 text-sm font-medium">본문 암기의 기본!</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="bg-emerald-900/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                  본문 1~4
                </span>
                <span className="text-2xl group-hover:translate-x-1 transition-transform">➔</span>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/sentence-order" className="group">
          <div className="relative p-6 rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-orange-200 transition-transform active:scale-95 overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-10 rounded-full blur-xl"></div>
            <div className="flex justify-between items-center relative z-10">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">🔄</span>
                  <h2 className="text-xl font-bold">해석보고 배열</h2>
                </div>
                <p className="text-orange-50 text-sm font-medium">문장 구조를 익혀요</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="bg-orange-900/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                  주요 문장
                </span>
                <span className="text-2xl group-hover:translate-x-1 transition-transform">➔</span>
              </div>
            </div>
          </div>
        </Link>

        <Link href="/word-arrange" className="group">
          <div className="relative p-6 rounded-3xl bg-gradient-to-br from-rose-400 to-rose-600 text-white shadow-lg shadow-rose-200 transition-transform active:scale-95 overflow-hidden">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-10 rounded-full blur-xl"></div>
            <div className="flex justify-between items-center relative z-10">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">🔀</span>
                  <h2 className="text-xl font-bold">영단어 문장배열</h2>
                </div>
                <p className="text-rose-50 text-sm font-medium">힌트 없이 도전!</p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="bg-rose-900/20 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                  심화 학습
                </span>
                <span className="text-2xl group-hover:translate-x-1 transition-transform">➔</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
