import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  whether: string;
}

const AuthWhether = ({ children, whether }: Props) => {
  return (
    <div className='mt-4 text-center text-sm'>
      <span>{whether} </span>
      {children}
    </div>
  );
};

export default AuthWhether;
