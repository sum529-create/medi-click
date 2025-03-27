'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { PATH } from '@/constants/routerPath';
import { logOut } from '@/utils/api/auth';
import { getSession } from '@/utils/api/authState';
import { useAccountStore } from '@/utils/zustand/useAccountStore';
import { useAuthStore } from '@/utils/zustand/useAuthStore';
import { Button } from '../ui/button';

const Nav = () => {
  const router = useRouter();
  const isLogin = useAuthStore((state) => state.isLogin);
  const userData = useAuthStore((state) => state.userData);
  const setIsLogin = useAuthStore((state) => state.setIsLogin);

  const setIsHospitalAccount = useAccountStore(
    (state) => state.setIsHospitalAccount,
  );

  const handleLogout = async () => {
    await logOut();
    setIsHospitalAccount(false);
    setIsLogin(false);
    router.push(PATH.LOGIN);
  };

  useEffect(() => {
    getSession();
  }, []);

  const navList = isLogin
    ? [{ path: PATH.MYPAGE, name: `${userData.name}님` }]
    : [{ path: PATH.LOGIN, name: '로그인' }];

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
