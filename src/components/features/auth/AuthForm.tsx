'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import { MODE } from '@/constants/authMode';
import { cn } from '@/lib/utils';
import { getSession, logIn, logOut, signUp } from '@/utils/api/auth';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';

interface Props {
  mode: string;
}

const AuthForm = ({ mode }: Props) => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    birth: '',
  });

  const [isLogin, setIsLogin] = useState(false);

  const handleAuthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === MODE.SIGNUP) {
      const error = await signUp(formData); // signUp 함수에서 반환한 값 받기

      if (error) {
        toast.error('이미 사용 중인 이메일입니다.', {
          position: 'top-center',
          autoClose: 3000,
        });
        return;
      }

      toast.success('회원가입이 완료되었습니다.', {
        position: 'top-center',
        autoClose: 3000,
      });

      logOut();

      router.push('login');
    } else {
      logIn(formData); // 로그인 처리
    }
  };

  useEffect(() => {
    getSession(setIsLogin);
  }, []);

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
        title='이메일 형식이 올바르지 않습니다. 예시: example@domain.com'
        value={formData.email}
        onChange={handleAuthChange}
        className={AuthInputClassName}
        required
      />

      <Input
        name='password'
        type='password'
        placeholder='비밀번호'
        pattern='^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*]{6,}$'
        title='영문과 숫자를 포함한 6글자 이상을 입력해주세요.'
        value={formData.password}
        onChange={handleAuthChange}
        className={AuthInputClassName}
        required
      />

      {mode === MODE.SIGNUP && (
        <>
          <Input
            name='name'
            type='text'
            placeholder='이름'
            pattern='^[가-힣]{2,4}$'
            title='이름을 정확히 입력해주세요. (한글 2~4자)'
            value={formData.name}
            onChange={handleAuthChange}
            className={AuthInputClassName}
            required
          />

          <Input
            name='phone'
            type='tel'
            placeholder='전화번호'
            pattern='^(02|010|031|032|033|041|042|043|051|052|053|054|055|061|062|063|064)-?\d{3,4}-?\d{4}$'
            title='전화번호를 정확히 입력해주세요. 예시: 010-1111-1111 또는 01011111111'
            value={formData.phone}
            onChange={handleAuthChange}
            className={AuthInputClassName}
            required
          />

          <Input
            name='birth'
            type='text'
            placeholder='생년월일'
            value={formData.birth}
            onChange={handleAuthChange}
            className={AuthInputClassName}
            required
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
