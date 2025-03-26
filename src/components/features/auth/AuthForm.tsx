'use client';

import { MODE } from '@/constants/authMode';
import { useAuthForm } from '@/hooks/auth/useAuthFormHook';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';

interface Props {
  mode: string;
}

const AuthForm = ({ mode }: Props) => {
  const {
    formData,
    handleAuthChange,
    handleAuthSubmit,
    AuthInputTitle,
    AuthInputClassName,
  } = useAuthForm(mode);

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
            pattern='^[가-힣]{2,30}$'
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
