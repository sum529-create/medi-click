import type { Metadata } from 'next';

import { ToastContainer, Bounce } from 'react-toastify';
import './globals.css';
import Header from '@/components/layout/Header';
import TQProvider from '@/provider/TQProvider';

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
        <TQProvider>
          <Header />
          <div className='flex min-h-[cal(100vh-60px)] flex-col items-center'>
            {children}
          </div>
          <ToastContainer
            position='top-right'
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
            transition={Bounce}
          />
        </TQProvider>
      </body>
    </html>
  );
}
