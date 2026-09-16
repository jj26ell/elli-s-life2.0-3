import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "엘리's life2.0",
  description: "정년퇴직 후 하느님과 나만을 위한 제2의 인생, 아름다운 삶을 가꾸고 나누는 공간",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main className="page-wrapper">
          {children}
        </main>
      </body>
    </html>
  );
}
