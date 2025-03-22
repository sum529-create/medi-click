import Link from 'next/link';
import AuthForm from '@/components/features/auth/AuthForm';
import AuthTitle from '@/components/features/auth/AuthTitle';
import AuthWhether from '@/components/features/auth/AuthWhether';
import { PATH } from '@/constants/routerPath';

const SignUpPage = () => {
  return (
    <AuthTitle title='회원가입'>
      <AuthForm mode='signup' />
      <AuthWhether whether='이미 계정이 있으신가요? '>
        <Link href={PATH.LOGIN} className='text-main'>
          로그인하러가기
        </Link>
      </AuthWhether>
    </AuthTitle>
  );
};

export default SignUpPage;
