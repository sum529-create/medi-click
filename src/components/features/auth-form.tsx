'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const AuthForm = ({ mode }: { mode: string }) => {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <form className='space-y-4'>
        <div>
          <Input
            name='id'
            type='text'
            placeholder='아이디'
            value={formData.id}
            onChange={handleChange}
            className='bg-[#F1F3F5]'
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
            className='bg-[#F1F3F5]'
            required
          />
        </div>

        <Button className='w-full bg-[#71C4EF] text-white hover:bg-[#1399DF]'>
          로그인
        </Button>
      </form>
      <div className='mt-4 text-center text-sm'>
        <span>아직 계정이 없으신가요? </span>

        <Link href='/signup' className='text-[#71C4EF] hover:text-[#1399DF]'>
          회원가입하러가기
        </Link>
      </div>
    </>
  );
};

export default AuthForm;
