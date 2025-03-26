'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { toast } from 'react-toastify';
import { MODE } from '@/constants/authMode';
import { PATH } from '@/constants/routerPath';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/store/useAuthStore';
import { listenAuthState, logIn, logOut, signUp } from '@/utils/api/auth';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';

interface Props {
  mode: string;
}

const AuthForm = ({ mode }: Props) => {
  const router = useRouter();

  const setIsLogin = useAuthStore((state) => state.setIsLogin);
  const setUserData = useAuthStore((state) => state.setUserData);
  const userData = useAuthStore((state) => state.userData);
  console.log('🚀 ~ AuthForm ~ userData:', userData);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    birth: '',
  });

  // 사용자가 입력 필드 값을 변경할 때 호출되는 함수
  const handleAuthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 로그인 또는 회원가입 폼 제출 시 호출되는 함수
  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === MODE.SIGNUP) {
      const signUpError = await signUp(formData);

      if (signUpError) {
        toast.error('이미 사용 중인 이메일입니다.');
        return;
      }

      toast.success('회원가입이 완료되었습니다.');

      logOut();

      router.push(PATH.LOGIN);
    } else {
      const { data, error: loginError } = await logIn(formData);
      console.log('🚀 ~ handleAuthSubmit ~ data:', data);

      if (loginError) {
        toast.error('아이디나 비밀번호가 틀렸습니다.');
        return;
      }

      setIsLogin(true);
      listenAuthState();

      router.push(PATH.HOME);
    }
  };

  const AuthInputTitle = {
    email: '이메일 형식이 올바르지 않습니다. 예시: example@domain.com',
    password: '영문과 숫자를 포함한 6글자 이상을 입력해주세요.',
    name: '이름을 정확히 입력해주세요. (한글 2~4자)',
    phone: '전화번호를 정확히 입력해주세요. 예시: 010-1111-1111',
  };

  const AuthInputClassName = cn(
    'h-14 w-full rounded-lg bg-gray02 px-5 text-lg',
  );

  return (
    <form
      onSubmit={handleAuthSubmit}
      className={`flex flex-col space-y-5 ${mode === MODE.LOGIN ? 'mb-10' : 'mb-8'}`}
    >
      <Input
        name='email'
        type='text'
        placeholder='이메일 주소'
        pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
        title={AuthInputTitle.email}
        value={formData.email}
        onChange={handleAuthChange}
        className={AuthInputClassName}
      />

      <Input
        name='password'
        type='password'
        placeholder='비밀번호'
        pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,}$'
        title={AuthInputTitle.password}
        value={formData.password}
        onChange={handleAuthChange}
        className={AuthInputClassName}
      />

      {mode === MODE.SIGNUP && (
        <>
          <Input
            name='name'
            type='text'
            placeholder='이름'
            pattern='^[가-힣]{2,4}$'
            title={AuthInputTitle.name}
            value={formData.name}
            onChange={handleAuthChange}
            className={AuthInputClassName}
          />

          <Input
            name='phone'
            type='tel'
            placeholder='전화번호'
            pattern='^(010)-\d{4}-\d{4}$'
            title={AuthInputTitle.phone}
            value={formData.phone}
            onChange={handleAuthChange}
            className={AuthInputClassName}
          />

          <Input
            name='birth'
            type='text'
            placeholder='생년월일'
            value={formData.birth}
            onChange={handleAuthChange}
            className={AuthInputClassName}
            onClick={(e) => ((e.target as HTMLInputElement).type = 'date')}
          />
        </>
      )}

      <Button className='h-12 w-full rounded-lg text-base font-medium'>
        {mode === MODE.LOGIN ? '로그인' : '회원가입'}
      </Button>
    </form>
  );
};

export default AuthForm;
