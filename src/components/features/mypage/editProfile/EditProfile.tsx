import { Button } from '@/components/ui/button';
import MainContentsContainer from '../MainContentsContainer';
import MainContentsTitleBox from '../MainContentsTitleBox';
import EditFormInput from './EditFormInput';

interface User {
  userData: {
    name: string;
    email: string;
    phoneNumber: string;
  };
}

const EditProfile = ({ userData }: User) => {
  const { name, email, phoneNumber } = userData;

  return (
    <MainContentsContainer>
      <MainContentsTitleBox title='개인 정보 수정' />
      <form className='relative px-20 py-10 font-bold'>
        <div className='flex gap-20'>
          <div className='flex flex-col items-center gap-8'>
            <div className='h-[166px] w-[166px] rounded-full border-2 border-main-hover bg-sub' />
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

export default EditProfile;
