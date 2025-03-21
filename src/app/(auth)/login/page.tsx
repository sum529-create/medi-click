import AuthForm from '@/components/features/auth-form';

const LoginPage = () => {
  return (
    <div className='w-full max-w-md'>
      <div className='rounded-lg bg-white p-8'>
        <h2 className='mb-8 text-center text-xl font-medium'>로그인</h2>

        <AuthForm mode='login' />
      </div>
    </div>
  );
};

export default LoginPage;
