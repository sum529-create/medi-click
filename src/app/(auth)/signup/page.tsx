import Link from 'next/link';
import AuthForm from '@/components/features/auth/AuthForm';
import { PATH } from '@/constants/routerPath';

const SignUpPage = () => {
  return (
    <div className='w-full max-w-md'>
      <div className='rounded-lg bg-white p-8'>
        <h2 className='mb-8 text-center text-xl font-medium'>회원가입</h2>

        <AuthForm mode='signup' />

        <div className='mt-4 text-center text-sm'>
          <span>이미 계정이 있으신가요? </span>

          <Link href={PATH.LOGIN} className='text-main'>
            로그인하러가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
