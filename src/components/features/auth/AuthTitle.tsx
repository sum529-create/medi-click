import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title: string;
}

const AuthTitle = ({ children, title }: Props) => {
  return (
    <div className='w-full max-w-md'>
      <div className='rounded-lg bg-white p-8'>
        <h2 className='mb-8 text-center text-xl font-medium'>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default AuthTitle;
