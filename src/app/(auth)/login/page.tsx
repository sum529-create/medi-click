import Link from 'next/link';
import AuthForm from '@/components/features/auth/AuthForm';
import AuthTitle from '@/components/features/auth/AuthTitle';
import { PATH } from '@/constants/routerPath';

const LoginPage = () => {
  return (
    <AuthTitle title='로그인'>
      <AuthForm mode='login' />

      <div className='mt-4 text-center text-sm'>
        <span>아직 계정이 없으신가요? </span>

        <Link href={PATH.SIGNUP} className='text-main'>
          회원가입하러가기
        </Link>
      </div>
    </AuthTitle>
  );
};

export default LoginPage;
