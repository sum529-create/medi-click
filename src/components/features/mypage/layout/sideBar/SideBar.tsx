import ProfileContainer from './ProfileContainer';
import ProfileImage from './ProfileImage';
import SideNav from './SideNav';

interface User {
  user: {
    name: string;
    email: string;
    profileImgPath: string;
  };
}

const SideBar = ({ user }: User) => {
  const { name, email, profileImgPath } = user;
  return (
    <aside className='flex flex-col gap-8'>
      <ProfileContainer>
        <ProfileImage src={profileImgPath} height='108px' width='108px' />
        <p className='text-2xl font-bold text-black01'>{name}님</p>
        <p className='font-bold text-black01'>{email}</p>
      </ProfileContainer>
      <SideNav />
    </aside>
  );
};

export default SideBar;
