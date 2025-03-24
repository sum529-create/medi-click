'use client';

import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import { PATH } from '@/constants/routerPath';
import { supabase } from '@/utils/supabase/supabase';
import ProfileImage from '../../ProfileImage';
import ProfileContainer from './ProfileContainer';
import UserMenuItem from './UserMenuItem';

const SideBar = () => {
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

  const testId: string = '0d6511b9-926b-443f-9828-39e5f302e1e4';

  const test = async () => {
    const { data } = await supabase.from('users').select('*').eq('id', testId);

    return data;
  };

  const { data, isError, isPending } = useQuery({
    queryKey: ['user'],
    queryFn: test,
  });

  if (isError || isPending) return;
  if (!data) return;

  const { name, avatar_path } = data[0];

  return (
    <aside className='flex flex-col gap-8'>
      <ProfileContainer>
        <ProfileImage src={avatar_path!} size='108px' />
        <p className='text-2xl font-bold text-black01'>{name}님</p>
        <p className='font-bold text-black01'>
          rrr6563@naver.com{/*세션에서 받아올 유저 이메일*/}
        </p>
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
