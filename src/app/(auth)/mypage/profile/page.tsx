import EditFormInput from '@/components/features/mypage/editProfile/EditFormInput';
import MainContentsContainer from '@/components/features/mypage/MainContentsContainer';
import MainContentsTitleBox from '@/components/features/mypage/MainContentsTitleBox';
import ProfileImage from '@/components/features/mypage/ProfileImage';
import { Button } from '@/components/ui/button';

const ProfileEditPage = () => {
  const userData = {
    name: '김수임',
    email: 'rrrr6563@naver.com',
    phoneNumber: '010-1234-5678',
    profileImgPath:
      'https://velog.velcdn.com/images/_kimsuim/profile/f5407ae2-e00f-4e28-a056-3e6429388967/image.JPG',
  }; //임시데이터

  const { name, email, phoneNumber, profileImgPath } = userData;

  return (
    <MainContentsContainer>
      <MainContentsTitleBox title='개인 정보 수정' />
      <form className='relative px-20 py-10 font-bold'>
        <div className='flex gap-20'>
          <div className='flex flex-col items-center gap-8'>
            <ProfileImage src={profileImgPath} size='166px' />
            <Button className='h-[44px] w-[144px] rounded-[10px] text-lg'>
              이미지 변경
            </Button>
          </div>
          <div className='flex w-full flex-col gap-10'>
            <EditFormInput label='이름' inputValue={name} disabled />
            <EditFormInput label='이메일' inputValue={email} disabled />
          </div>
        </div>
        <EditFormInput
          label='연락처'
          inputValue={phoneNumber}
          className='my-10'
        />
        <div className='flex justify-end'>
          <Button
            type='submit'
            className='h-[44px] w-[146px] rounded-[10px] bg-deep-blue text-lg'
          >
            정보 수정하기
          </Button>
        </div>
      </form>
    </MainContentsContainer>
  );
};

export default ProfileEditPage;
