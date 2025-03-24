'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Flip, toast } from 'react-toastify';
import { QUERY_KEY } from '@/constants/queryKey';
import { updateUserProfile } from '@/utils/api/userProfile';

/**
 * 유저 회원 정보를 수정하는 mutation을 반환하는 훅입니다.
 * useMutation 훅과 updateUserProfile api 함수를 사용하여 사용자 정보를 업데이트합니다.
 * mutationFn 파라미터로 수정할 연락처를 문자 형태로 받습니다.
 *
 * @returns { mutate: updateProfile }
 */
export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  const { mutate: updateProfile } = useMutation({
    mutationFn: (updatedPhoneNumber: string) =>
      updateUserProfile(updatedPhoneNumber),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY.USER],
      });
      toast.success('프로필 업데이트가 완료되었습니다.', {
        position: 'top-right',
        autoClose: 2500,
        transition: Flip,
      });
    },
    onError: () =>
      toast.error('프로필 업데이트에 실패했습니다.', {
        position: 'top-right',
        autoClose: 2500,
        transition: Flip,
      }),
  });

  return updateProfile;
};
