"use client";
import Link from "next/link";

const modes = [
  { href: "/flashcard", emoji: "🧠", title: "암기장", desc: "영단어 보고 뜻 암기하기", badge: "107개", gradient: "from-lime-500 to-green-600" },
  { href: "/recall", emoji: "🎯", title: "리콜", desc: "영단어 뜻 4지선다 퀴즈", badge: "107문제", gradient: "from-cyan-500 to-blue-600" },
  { href: "/word-test", emoji: "📝", title: "영단어 쓰기", desc: "한글 뜻 보고 영단어 입력", badge: "107문제", gradient: "from-indigo-500 to-violet-600" },
  { href: "/fill-blank", emoji: "📖", title: "빈칸 채우기", desc: "본문 읽으며 핵심 단어 채우기", badge: "본문 4개", gradient: "from-emerald-500 to-teal-600" },
  { href: "/sentence-order", emoji: "🔄", title: "해석→문장 배열", desc: "한글 해석 보고 어순 맞추기", badge: "본문 4개", gradient: "from-amber-500 to-orange-600" },
  { href: "/word-arrange", emoji: "🔀", title: "영단어 문장 배열", desc: "힌트 없이 영어 어순 맞추기", badge: "본문 4개", gradient: "from-rose-500 to-pink-600" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-5 py-8">
      <header className="text-center mb-6 pt-4 animate-fade-in">
        <div className="text-5xl mb-3">📚</div>
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
          능실중3 5과<br/>수행평가 대비
        </h1>
        <p className="text-slate-500 mt-2 text-sm">학습 모드를 선택하세요</p>
      </header>

      <main className="flex-1 flex flex-col gap-3">
        {modes.map((m, i) => (
          <Link key={i} href={m.href}
            className={`group block w-full bg-gradient-to-r ${m.gradient} p-4 rounded-2xl shadow-lg hover:shadow-xl active:scale-[0.97] transition-all animate-slide-up`}
            style={{ animationDelay: `${i * 0.06}s`, animationFillMode: 'backwards' }}
          >
            <div className="flex items-center gap-3">
              <div className="text-3xl w-12 h-12 flex items-center justify-center bg-white/20 rounded-xl backdrop-blur-sm flex-shrink-0">{m.emoji}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h2 className="text-base font-bold text-white">{m.title}</h2>
                  <span className="text-[10px] font-bold bg-white/25 text-white px-2 py-0.5 rounded-full">{m.badge}</span>
                </div>
                <p className="text-white/70 text-xs">{m.desc}</p>
              </div>
              <div className="text-white/40 text-lg flex-shrink-0">›</div>
            </div>
          </Link>
        ))}
      </main>

      <footer className="text-center py-4 text-xs text-slate-400">
        NE능률 김성곤 · Lesson 5
      </footer>
    </div>
  );
}
