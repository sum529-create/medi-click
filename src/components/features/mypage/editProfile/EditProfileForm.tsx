'use client';

import { useState } from 'react';
import EditFormInput from '@/components/features/mypage/editProfile/EditFormInput';
import ProfileImage from '@/components/features/mypage/ProfileImage';
import { Button } from '@/components/ui/button';
import { useUpdateProfileMutate } from '@/hooks/tanstackQuery/useUpdateProfileMutate';
import { ProfileData } from '@/utils/api/userProfile';
import { validatePhoneNumber } from '@/utils/func/validatePhoneNumber';

const EditProfileForm = ({ profile }: ProfileData) => {
  const { id, phone_number, birth, name } = profile;

  const [phoneNumberValue, setPhoneNumberValue] =
    useState<string>(phone_number);
  const [errorText, setErrorText] = useState<string | null>(null);

  const updateProfile = useUpdateProfileMutate(phoneNumberValue, id);

  const { changeCheck, formatCheck, errorMessage } = validatePhoneNumber(
    phone_number,
    phoneNumberValue,
  );

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('phoneNumber', phoneNumberValue);
    setPhoneNumberValue(e.target.value);
  };

  const handleEditProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (changeCheck && formatCheck) {
      updateProfile();
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
        <ProfileImage size='166px' />
        <div className='flex w-full flex-col gap-10'>
          <EditFormInput
            textSize='xl'
            label='이름'
            inputValue={name}
            disabled
          />
          <EditFormInput
            textSize='xl'
            label='생년월일'
            inputValue={birth}
            disabled
          />
        </div>
      </div>
      <EditFormInput
        textSize='xl'
        label='연락처'
        inputValue={phoneNumberValue}
        className='my-10'
        onChange={handleOnChange}
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
