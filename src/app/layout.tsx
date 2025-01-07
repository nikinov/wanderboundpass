import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "WanderPass Bound | Journey Deeper, Live Richer",
  description: "Discover Morocco's hidden treasures through authentic local experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning>
        <div className="antialiased bg-background text-foreground">
          <Header />
          <main className="pt-16">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
