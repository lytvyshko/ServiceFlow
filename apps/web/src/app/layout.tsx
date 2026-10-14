import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import ThemeRegistry from '@/components/ThemeRegistry';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ServiceFlow',
  description: 'Manage your service business with ServiceFlow',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
