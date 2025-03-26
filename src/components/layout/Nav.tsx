'use client';

import Link from 'next/link';
import { useState } from 'react';
import { PATH } from '@/constants/routerPath';
import { useAccountStore } from '@/utils/zustand/useAccountStore';
import { Button } from '../ui/button';

const Nav = () => {
  // 조건부 렌더링을 위해 임시로 추가해둔 로그인 상태
  const [isLogin, setIsLogin] = useState(true);

  const setIsHospitalAccount = useAccountStore(
    (state) => state.setIsHospitalAccount,
  );

  const handleLogout = () => {
    setIsHospitalAccount(false);
    setIsLogin(false);
  };

  const navList = isLogin
    ? [
        { path: PATH.MYPAGE, name: '수임님' },
        { path: PATH.HOSPITAL, name: '병원 목록' },
      ]
    : [
        { path: PATH.HOSPITAL, name: '병원 목록' },
        { path: PATH.LOGIN, name: '로그인' },
      ];

  return (
    <nav className='flex items-center gap-4'>
      {navList.map((nav) => {
        return (
          <Link href={nav.path} key={nav.path} className='hover:text-main'>
            {nav.name}
          </Link>
        );
      })}
      {isLogin && (
        <Button variant='secondary' onClick={handleLogout}>
          로그아웃
        </Button>
      )}
    </nav>
  );
};

export default Nav;
