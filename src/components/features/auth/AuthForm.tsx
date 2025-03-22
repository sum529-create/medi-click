'use client';

import React, { useState } from 'react';
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

  return (
    <form className='space-y-4'>
      <Input
        name='id'
        type='text'
        placeholder={mode === 'login' ? '아이디' : '이메일 주소'}
        value={formData.id}
        onChange={handleChange}
        className='bg-gray02'
        required
      />

      <Input
        name='password'
        type='password'
        placeholder='비밀번호'
        value={formData.password}
        onChange={handleChange}
        className='bg-gray02'
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
            className='bg-gray02'
            required
          />

          <Input
            name='phone'
            type='tel'
            placeholder='전화번호'
            pattern='[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}'
            value={formData.phone}
            onChange={handleChange}
            className='bg-gray02'
            required
          />

          <Input
            name='birthdate'
            type='date'
            placeholder='생년월일'
            value={formData.birthday}
            onChange={handleChange}
            className='bg-gray02'
            required
          />

          <Select>
            <SelectTrigger className='bg-gray02'>
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

      <Button className='w-full'>
        {mode === 'login' ? '로그인' : '회원가입'}
      </Button>
    </form>
  );
};

export default AuthForm;
