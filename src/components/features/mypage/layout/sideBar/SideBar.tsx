'use client';

import { usePathname } from 'next/navigation';
import { PATH } from '@/constants/routerPath';
import ProfileImage from '../../ProfileImage';
import ProfileContainer from './ProfileContainer';
import UserMenuItem from './UserMenuItem';

interface User {
  user: {
    name: string;
    email: string;
    profileImgPath: string;
  };
}

const SideBar = ({ user }: User) => {
  const pathName = usePathname();

  const menuItems = [
    { label: '내 예약 캘린더', path: PATH.MYPAGE },
    { label: '내 예약 목록', path: PATH.RESERVATIONS },
    {
      label: '개인 정보 수정',
      path: PATH.PROFILE,
      className: 'rounded-b-[16px]',
    },
  ];

  const { name, email, profileImgPath } = user;
  return (
    <aside className='flex flex-col gap-8'>
      <ProfileContainer>
        <ProfileImage src={profileImgPath} height='108px' width='108px' />
        <p className='text-2xl font-bold text-black01'>{name}님</p>
        <p className='font-bold text-black01'>{email}</p>
      </ProfileContainer>
      <nav className='h-[276px] w-[264px] rounded-[16px] bg-sub'>
        <div className='flex h-[66px] w-[264px] items-center justify-center rounded-t-[16px] bg-main text-2xl font-bold text-white'>
          USER MENU
        </div>
        {menuItems.map((item, index) => (
          <UserMenuItem
            key={index}
            className={`${item.className} ${pathName === item.path && `bg-sub-hover`}`}
            href={item.path}
          >
            {item.label}
          </UserMenuItem>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
