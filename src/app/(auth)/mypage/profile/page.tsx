'use client';

import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import EditFormInput from '@/components/features/mypage/editProfile/EditFormInput';
import MainContentsContainer from '@/components/features/mypage/MainContentsContainer';
import MainContentsTitleBox from '@/components/features/mypage/MainContentsTitleBox';
import ProfileImage from '@/components/features/mypage/ProfileImage';
import { Button } from '@/components/ui/button';
import { supabase } from '@/utils/supabase/supabase';

const ProfileEditPage = () => {
  const testId: string = '0d6511b9-926b-443f-9828-39e5f302e1e4';

  const test = async () => {
    const { data } = await supabase.from('users').select('*').eq('id', testId);

    return data;
  };

  const { data, isError, isPending } = useQuery({
    queryKey: ['user'],
    queryFn: test,
  });

  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (data) setPhone(data[0].phone_number);
  }, [data]);

  const handleEditProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await supabase
      .from('users')
      .update({ phone_number: phone })
      .eq('id', testId);
    if (error) console.log('error', error);
  };

  if (isError || isPending) return;
  if (!data) return;

  return (
    <MainContentsContainer>
      <MainContentsTitleBox title='개인 정보 수정' />
      <form
        className='relative px-20 py-10 font-bold'
        onSubmit={handleEditProfile}
      >
        <div className='flex gap-20'>
          <div className='flex flex-col items-center gap-8'>
            <ProfileImage src={data[0].avatar_path!} size='166px' />
            <Button className='h-[44px] w-[144px] rounded-[10px] text-lg'>
              이미지 변경
            </Button>
          </div>
          <div className='flex w-full flex-col gap-10'>
            <EditFormInput label='이름' inputValue={data[0].name!} disabled />
            <EditFormInput
              label='생년월일'
              inputValue={data[0].birth}
              disabled
            />
          </div>
        </div>
        <EditFormInput
          label='연락처'
          inputValue={phone}
          className='my-10'
          onChange={(e) => setPhone(e.target.value)}
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
