import Text from '@/components/ui/Text';
import Title from '@/components/ui/Title';
import { PATH } from '@/constants/routerPath';
import { getUserProfile } from '@/utils/api/userProfile';
import { createClient } from '@/utils/supabase/supabaseServer';
import ProfileImage from '../../ProfileImage';
import ProfileContainer from './ProfileContainer';
import UserMenuItem from './UserMenuItem';

const SideBar = async () => {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const profile = await getUserProfile(session?.user.id);

  const menuItems = [
    { label: '내 예약 목록', path: PATH.RESERVATIONS },
    {
      label: '개인 정보 수정',
      path: PATH.PROFILE,
      className: 'rounded-b-[16px]',
    },
  ];

  if (!profile) return;

  return (
    <aside className='flex flex-col gap-8'>
      <ProfileContainer>
        <ProfileImage size='108px' />
        <Title tag='h2' size='md'>
          {profile.name}님
        </Title>
        <Text isBold size='lg'>
          {profile.email}
        </Text>
      </ProfileContainer>
      <nav
        className={'h-[206px] w-[264px] overflow-hidden rounded-[16px] bg-sub'}
      >
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
