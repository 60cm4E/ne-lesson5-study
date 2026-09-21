import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '능실중3 5과 수행평가 대비',
  description: '능실중학교 3학년 5과 영어 수행평가 완벽 대비 앱',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="antialiased text-slate-800 bg-slate-50 min-h-screen">
        <div className="max-w-lg mx-auto bg-white min-h-screen shadow-2xl relative overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
