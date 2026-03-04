import type { Metadata } from 'next';
import { Orbitron, Rajdhani } from 'next/font/google';
import './globals.css'; // Global styles

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
});

const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
});

export const metadata: Metadata = {
  title: 'HAWC | High-Altitude Wind Capture',
  description: 'Unlocking the next frontier of renewable energy with autonomous airborne wind turbines.',
};

import ScrollToTop from '@/components/ScrollToTop';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${rajdhani.variable} scroll-smooth dark`}>
      <body className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-body transition-colors duration-300" suppressHydrationWarning>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
