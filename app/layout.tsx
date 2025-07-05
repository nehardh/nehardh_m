import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nehardh Madapuri - Full Stack Developer & Cybersecurity Enthusiast',
  description: 'Portfolio of Nehardh Madapuri',
  keywords: 'Nehardh Madapuri, Full Stack Developer, Cybersecurity, AI/ML, React, Next.js, Portfolio',
  authors: [{ name: 'Nehardh Madapuri' }],
  openGraph: {
    title: 'Nehardh Madapuri - Full Stack Developer & Cybersecurity Enthusiast',
    description: 'Portfolio showcasing projects and experience in Full Stack Development, Cybersecurity, and AI/ML',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}