import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Luyao - AI Researcher Portfolio",
  description: "AI Researcher specializing in Computer Vision & NLP",
  keywords: ["AI", "Computer Vision", "NLP", "Machine Learning", "Research"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
