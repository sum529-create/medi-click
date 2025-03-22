import Link from 'next/link';
import AuthForm from '@/components/features/auth/AuthForm';
import AuthTitle from '@/components/features/auth/AuthTitle';
import { PATH } from '@/constants/routerPath';

const SignUpPage = () => {
  return (
    <AuthTitle title='회원가입'>
      <AuthForm mode='signup' />

      <div className='mt-4 text-center text-sm'>
        <span>이미 계정이 있으신가요? </span>

        <Link href={PATH.LOGIN} className='text-main'>
          로그인하러가기
        </Link>
      </div>
    </AuthTitle>
  );
};

export default SignUpPage;
