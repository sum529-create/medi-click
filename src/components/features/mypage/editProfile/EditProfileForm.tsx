'use client';

import { useState } from 'react';
import Loading from '@/components/common/Loading';
import EditFormInput from '@/components/features/mypage/editProfile/EditFormInput';
import ProfileImage from '@/components/features/mypage/ProfileImage';
import { Button } from '@/components/ui/button';
import { useUpdateProfile } from '@/hooks/tanstackQuery/useUpdateProfile';
import { useUserProfile } from '@/hooks/tanstackQuery/useUserProfile';
import { validatePhoneNumber } from '@/utils/func/validatePhoneNumber';

const EditProfileForm = () => {
  const { isProfileError, isProfilePending, getProfileError, profile } =
    useUserProfile();

  const updateProfile = useUpdateProfile();
  const [phoneNumber, setPhoneNumber] = useState<string>(
    profile?.phone_number || '',
  );
  const [errorText, setErrorText] = useState<string | null>(null);

  if (isProfileError) throw getProfileError;
  if (isProfilePending) return <Loading size={30} />;
  if (!profile) return; // profile 값 보장

  const { changeCheck, formatCheck, errorMessage } = validatePhoneNumber(
    profile.phone_number,
    phoneNumber,
  );

  const handleEditProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (changeCheck && formatCheck) {
      updateProfile(phoneNumber);
      setErrorText(null);
    } else {
      setErrorText(errorMessage);
    }
  };
  return (
    <form
      className='relative px-20 py-10 font-bold'
      onSubmit={handleEditProfile}
    >
      <div className='flex gap-20'>
        <div className='flex flex-col items-center gap-8'>
          <ProfileImage src={profile.avatar_path} size='166px' />
          <Button className='h-[44px] w-[144px] rounded-[10px] text-lg'>
            이미지 변경
          </Button>
        </div>
        <div className='flex w-full flex-col gap-10'>
          <EditFormInput label='이름' inputValue={profile.name} disabled />
          <EditFormInput label='생년월일' inputValue={profile.birth} disabled />
        </div>
      </div>
      <EditFormInput
        label='연락처'
        inputValue={phoneNumber}
        className='my-10'
        onChange={(e) => setPhoneNumber(e.target.value)}
        errorMessage={errorText}
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
  );
};

export default EditProfileForm;
