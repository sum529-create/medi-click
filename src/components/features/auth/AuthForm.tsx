'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MODE } from '@/constants/authMode';
import { cn } from '@/lib/utils';
import { getSession, login, signUp } from '@/utils/api/auth';
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
    role: '',
  });

  const [isLogin, setIsLogin] = useState(false);

  const handleAuthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value }));
  };

  const handleAuthSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === MODE.SIGNUP) {
      signUp(formData);
    } else {
      login(formData);
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
        value={formData.email}
        onChange={handleAuthChange}
        className={AuthInputClassName}
        required
      />

      <Input
        name='password'
        type='password'
        placeholder='비밀번호'
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
            value={formData.name}
            onChange={handleAuthChange}
            className={AuthInputClassName}
            required
          />

          <Input
            name='phone'
            type='tel'
            placeholder='전화번호'
            pattern='[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}|[0-9]{9,11}'
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

          <Select value={formData.role} onValueChange={handleRoleChange}>
            <SelectTrigger className={AuthInputClassName}>
              <SelectValue placeholder='역할 선택' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='doctor'>의사</SelectItem>
              <SelectItem value='nurse'>간호사</SelectItem>
              <SelectItem value='patient'>환자</SelectItem>
            </SelectContent>
          </Select>
        </>
      )}

      <Button className='h-12 w-full rounded-lg text-base font-medium'>
        {mode === MODE.LOGIN ? '로그인' : '회원가입'}
      </Button>
    </form>
  );
};

export default AuthForm;
