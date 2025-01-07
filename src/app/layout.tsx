import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";

export const metadata: Metadata = {
  title: "Wander Bound Pass",
  description: "Your journey begins soon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${GeistSans.className}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
