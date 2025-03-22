import Link from 'next/link';
import AuthBox from '@/components/features/auth/AuthBox';
import AuthForm from '@/components/features/auth/AuthForm';
import AuthWhether from '@/components/features/auth/AuthWhether';
import { PATH } from '@/constants/routerPath';

const LoginPage = () => {
  return (
    <AuthBox title='로그인'>
      <AuthForm mode='login' />
      <AuthWhether whether='아직 계정이 없으신가요? '>
        <Link href={PATH.SIGNUP} className='text-main'>
          회원가입하러가기
        </Link>
      </AuthWhether>
    </AuthBox>
  );
};

export default LoginPage;
