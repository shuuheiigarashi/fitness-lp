import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Physique Fitness - 理想の身体を科学的にデザイン",
    template: "%s | Physique Fitness",
  },
  description: "最短で「見た目が変わる」体験を。フィジークレベルのボディメイクをサポートするパーソナルトレーニングジム。科学的根拠に基づいたトレーニング指導と栄養管理で、あなたの理想の身体を実現します。",
  keywords: [
    "パーソナルトレーニング",
    "フィジーク",
    "ボディメイク",
    "ジム",
    "トレーニング",
    "栄養管理",
    "渋谷",
    "東京",
    "JBBF",
    "科学的トレーニング"
  ],
  authors: [{ name: "Physique Fitness" }],
  creator: "Physique Fitness",
  publisher: "Physique Fitness",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://physique-fitness.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://physique-fitness.com",
    siteName: "Physique Fitness",
    title: "Physique Fitness - 理想の身体を科学的にデザイン",
    description: "最短で「見た目が変わる」体験を。フィジークレベルのボディメイクをサポートするパーソナルトレーニングジム",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Physique Fitness - 理想の身体を科学的にデザイン",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Physique Fitness - 理想の身体を科学的にデザイン",
    description: "最短で「見た目が変わる」体験を。フィジークレベルのボディメイクをサポート",
    images: ["/og-image.jpg"],
    creator: "@physique_fitness",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
