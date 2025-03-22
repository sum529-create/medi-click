import Link from 'next/link';
import AuthForm from '@/components/features/auth/AuthForm';
import AuthTitle from '@/components/features/auth/AuthTitle';
import AuthWhether from '@/components/features/auth/AuthWhether';
import { PATH } from '@/constants/routerPath';

const LoginPage = () => {
  return (
    <AuthTitle title='로그인'>
      <AuthForm mode='login' />
      <AuthWhether whether='아직 계정이 없으신가요? '>
        <Link href={PATH.SIGNUP} className='text-main'>
          회원가입하러가기
        </Link>
      </AuthWhether>
    </AuthTitle>
  );
};

export default LoginPage;
