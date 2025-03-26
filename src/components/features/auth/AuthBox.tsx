import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
}

const AuthBox = ({ children, title }: Props) => {
  return (
    <div className='flex h-[calc(100vh-80px)] w-full items-center justify-center bg-gray01'>
      <div className='w-full max-w-xl rounded-2xl bg-white p-12'>
        <h2 className='text-center text-3xl font-normal'>{title}</h2>
        <div className='p-10'>{children}</div>
      </div>
    </div>
  );
};

export default AuthBox;
