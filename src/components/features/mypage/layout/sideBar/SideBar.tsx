import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import { PATH } from '@/constants/routerPath';
import { getUserProfile } from '@/utils/api/userProfile';
import ProfileImage from '../../ProfileImage';
import ProfileContainer from './ProfileContainer';
import UserMenuItem from './UserMenuItem';

const SideBar = async () => {
  const menuItems = [
    { label: '내 예약 캘린더', path: PATH.MYPAGE },
    { label: '내 예약 목록', path: PATH.RESERVATIONS },
    {
      label: '개인 정보 수정',
      path: PATH.PROFILE,
    },
  ];
  const { avatar_path, name } = await getUserProfile();

  return (
    <aside className='flex flex-col gap-8'>
      <ProfileContainer>
        <ProfileImage src={avatar_path} size='108px' />
        <Title tag='h2' size='md'>
          {name}님
        </Title>
        <Text isBold size='lg'>
          rrrr6563@naver.com
        </Text>
      </ProfileContainer>
      <nav className='h-[276px] w-[264px] overflow-hidden rounded-[16px] bg-sub'>
        <div className='flex h-[66px] w-[264px] items-center justify-center rounded-t-[16px] bg-main text-2xl font-bold text-white'>
          USER MENU
        </div>
        {menuItems.map((item, index) => (
          <UserMenuItem key={index} href={item.path}>
            {item.label}
          </UserMenuItem>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
