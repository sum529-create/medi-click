import EditProfileForm from '@/components/features/mypage/editProfile/EditProfileForm';
import MainContentsContainer from '@/components/features/mypage/MainContentsContainer';
import MainContentsTitleBox from '@/components/features/mypage/MainContentsTitleBox';
import { getUserProfile } from '@/utils/api/userProfile';
import { createClient } from '@/utils/supabase/supabaseServer';

const ProfileEditPage = async () => {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const user = await getUserProfile(session?.user.id);
  console.log('user', user);

  return (
    <MainContentsContainer>
      <MainContentsTitleBox title='개인 정보 수정' />
      <EditProfileForm profile={user} />
    </MainContentsContainer>
  );
};

export default ProfileEditPage;
