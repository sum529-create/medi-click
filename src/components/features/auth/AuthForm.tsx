'use client';

import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';

interface Props {
  mode: string;
}

const AuthForm = ({ mode }: Props) => {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    name: '',
    phone: '',
    birthday: '',
    role: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const AuthInputClassName = 'h-14 w-full rounded-lg bg-gray02 px-5 text-lg';

  return (
    <form
      className={`flex flex-col space-y-5 ${mode === 'login' ? 'mb-10' : 'mb-8'}`}
    >
      <Input
        name='id'
        type='text'
        placeholder={mode === 'login' ? '아이디' : '이메일 주소'}
        value={formData.id}
        onChange={handleChange}
        className={AuthInputClassName}
        required
      />

      <Input
        name='password'
        type='password'
        placeholder='비밀번호'
        value={formData.password}
        onChange={handleChange}
        className={AuthInputClassName}
        required
      />

      {mode === 'signup' && (
        <>
          <Input
            name='name'
            type='text'
            placeholder='이름'
            value={formData.name}
            onChange={handleChange}
            className={AuthInputClassName}
            required
          />

          <Input
            name='phone'
            type='tel'
            placeholder='전화번호'
            pattern='[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}'
            value={formData.phone}
            onChange={handleChange}
            className={AuthInputClassName}
            required
          />

          <Input
            name='birthday'
            type='text'
            placeholder='생년월일'
            value={formData.birthday}
            onChange={handleChange}
            className={AuthInputClassName}
            required
            onClick={(e) => ((e.target as HTMLInputElement).type = 'date')}
          />

          <Select>
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
        {mode === 'login' ? '로그인' : '회원가입'}
      </Button>
    </form>
  );
};

export default AuthForm;
