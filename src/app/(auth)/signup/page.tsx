import Link from 'next/link';
import AuthBox from '@/components/features/auth/AuthBox';
import AuthForm from '@/components/features/auth/AuthForm';
import AuthWhether from '@/components/features/auth/AuthWhether';
import { PATH } from '@/constants/routerPath';

const SignUpPage = () => {
  return (
    <AuthBox title='회원가입'>
      <AuthForm mode='signup' />
      <AuthWhether whether='이미 계정이 있으신가요? '>
        <Link href={PATH.LOGIN} className='text-main'>
          로그인하러가기
        </Link>
      </AuthWhether>
    </AuthBox>
  );
};

export default SignUpPage;
