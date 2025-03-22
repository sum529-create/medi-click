import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
}

const AuthTitle = ({ children, title }: Props) => {
  return (
    <div className='flex h-[calc(100vh-80px)] items-center justify-center bg-gray01'>
      <div className='w-full max-w-xl rounded-2xl bg-white p-12 shadow-sm'>
        <h2 className='text-center text-3xl font-normal'>{title}</h2>
        <div className='p-10'>{children}</div>
      </div>
    </div>
  );
};

export default AuthTitle;
