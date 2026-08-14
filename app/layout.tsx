import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './context/ThemeContext';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Marie Sandrine Ingabire — Frontend Engineer',
  description:
    'Frontend-focused Software Engineer specialising in React, Next.js and TypeScript. Open to new opportunities.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        No hard-coded "dark" class here — ThemeProvider adds it dynamically
        based on localStorage / system preference, avoiding a flash of wrong theme.
      */}
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
