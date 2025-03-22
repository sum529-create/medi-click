import type { Metadata } from 'next';

import './globals.css';
import Header from '@/components/layout/Header';

export const metadata: Metadata = {
  title: 'MEDICLCIK',
  description: '원하는 병원을 클릭 한 번으로',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body>
        <Header />
        <div className='flex min-h-[cal(100vh-60px)] flex-col items-center'>
          {children}
        </div>
      </body>
    </html>
  );
}
