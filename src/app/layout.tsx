import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "능실중3 5과 수행평가 대비",
  description: "중학교 3학년 5과 영어 수행평가 대비를 위한 학습 앱입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-slate-50 text-slate-900 antialiased min-h-screen">
        <div className="max-w-lg mx-auto bg-white min-h-screen shadow-sm relative pb-10">
          {children}
        </div>
      </body>
    </html>
  );
}
