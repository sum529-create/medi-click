'use client';

import { usePathname } from 'next/navigation';
import Loading from '@/components/common/Loading';
import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import { QUERY_KEY } from '@/constants/queryKey';
import { PATH } from '@/constants/routerPath';
import { useMyPageData } from '@/hooks/tanstackQuery/useMyPageData';
import { getUserProfile } from '@/utils/api/userProfile';
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

  const {
    isError: isProfileError,
    isPending: isProfilePending,
    error: getProfileError,
    data: profile,
  } = useMyPageData(QUERY_KEY.USER, getUserProfile);

  if (isProfileError) throw getProfileError;
  if (isProfilePending) return <Loading size={30} />;
  if (!profile) return;

  return (
    <aside className='flex flex-col gap-8'>
      <ProfileContainer>
        <ProfileImage src={profile.avatar_path} size='108px' />
        <Title tag='h2' size='md'>
          {profile.name}님
        </Title>
        <Text isBold size='lg'>
          rrrr6563@naver.com
        </Text>
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
