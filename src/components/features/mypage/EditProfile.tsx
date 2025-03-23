import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Text from '@/components/ui/Text';
import MainContentsContainer from './MainContentsContainer';
import MainContentsTitleBox from './MainContentsTitleBox';

interface User {
  userData: {
    name: string;
    email: string;
    phoneNumber: string;
  };
}

const EditProfile = ({ userData }: User) => {
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
            <div className='flex flex-col gap-3'>
              <Text size='xl' color='black02' align='left'>
                이름
              </Text>
              <Input
                className='h-[50px] w-full rounded-[14px] border-2 border-gray03'
                disabled
                value={userData.name}
              />
            </div>
            <div className='flex flex-col gap-3'>
              <Text size='xl' color='black02' align='left'>
                이메일
              </Text>
              <Input
                className='h-[50px] w-full rounded-[14px] border-2 border-gray03'
                disabled
                value={userData.email}
              />
            </div>
          </div>
        </div>
        <div className='my-10 flex flex-col gap-3'>
          <Text size='xl' color='black02' align='left'>
            이메일
          </Text>
          <Input
            className='h-[50px] w-full rounded-[14px] border-2 border-gray03'
            value={userData.phoneNumber}
          />
        </div>
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
