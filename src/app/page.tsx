"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="p-6 pb-2 text-center mt-10">
        <h1 className="text-2xl font-bold text-blue-900 mb-2">능실중3 5과<br/>수행평가 대비</h1>
        <p className="text-slate-600">원하는 학습 모드를 선택하세요</p>
      </header>

      <main className="flex-1 p-6 flex flex-col gap-4 justify-center">
        <Link href="/word-test" className="group block w-full bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all active:scale-[0.98]">
          <div className="flex items-center gap-4">
            <div className="text-4xl">📝</div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">영단어 쓰기</h2>
              <p className="text-sm text-slate-500 mt-1">한글 뜻을 보고 영단어 입력하기</p>
            </div>
          </div>
        </Link>

        <Link href="/fill-blank" className="group block w-full bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all active:scale-[0.98]">
          <div className="flex items-center gap-4">
            <div className="text-4xl">📖</div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">본문 빈칸 채우기</h2>
              <p className="text-sm text-slate-500 mt-1">본문을 읽으며 주요 단어 채우기</p>
            </div>
          </div>
        </Link>

        <Link href="/sentence-order" className="group block w-full bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all active:scale-[0.98]">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🔄</div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">해석 보고 문장 배열</h2>
              <p className="text-sm text-slate-500 mt-1">한글 뜻을 보고 영어 단어 조합하기</p>
            </div>
          </div>
        </Link>

        <Link href="/word-arrange" className="group block w-full bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all active:scale-[0.98]">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🔀</div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">영단어 문장 배열</h2>
              <p className="text-sm text-slate-500 mt-1">한글 없이 영어 문장 어순 맞추기</p>
            </div>
          </div>
        </Link>
      </main>
    </div>
  );
}
