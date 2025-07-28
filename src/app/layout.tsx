import type { Metadata } from "next";
import "./globals.css";
import { AppStateProvider } from '../context/AppState';
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "foo-rum",
  description: "Assignment for atlys",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <AppStateProvider>
        {children}
        </AppStateProvider>
      </body>
    </html>
  );
}




