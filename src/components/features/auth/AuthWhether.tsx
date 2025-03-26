import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  whether: string;
}

const AuthWhether = ({ children, whether }: Props) => {
  return (
    <p className='text-center text-lg'>
      {whether}
      {children}
    </p>
  );
};

export default AuthWhether;
