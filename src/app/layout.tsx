import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { AppThemeProvider } from '@/app/providers/theme-provider';
import Navbar from '@/components/Navbar';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ashutosh Kumar | Software Engineer',
  description:
    'Personal portfolio website of Ashutosh Kumar, software engineer focused on frontend, React and modern web technologies',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <AppThemeProvider>
          <Navbar />
          {children}
        </AppThemeProvider>
      </body>
    </html>
  );
}
