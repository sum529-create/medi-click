import EditProfileForm from '@/components/features/mypage/editProfile/EditProfileForm';
import MainContentsContainer from '@/components/features/mypage/MainContentsContainer';
import MainContentsTitleBox from '@/components/features/mypage/MainContentsTitleBox';

const ProfileEditPage = () => {
  return (
    <MainContentsContainer>
      <MainContentsTitleBox title='개인 정보 수정' />
      <EditProfileForm />
    </MainContentsContainer>
  );
};

export default ProfileEditPage;
