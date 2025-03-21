'use client';

import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface Props {
  mode: string;
}

const AuthForm = ({ mode }: Props) => {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className='space-y-4'>
      <div>
        <Input
          name='id'
          type='text'
          placeholder='아이디'
          value={formData.id}
          onChange={handleChange}
          className='bg-gray02'
          required
        />
      </div>

      <div>
        <Input
          name='password'
          type='password'
          placeholder='비밀번호'
          value={formData.password}
          onChange={handleChange}
          className='bg-gray02'
          required
        />
      </div>

      <Button className='w-full bg-main text-white hover:bg-main-hover'>
        로그인
      </Button>
    </form>
  );
};

export default AuthForm;
