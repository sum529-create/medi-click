'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Flip, toast } from 'react-toastify';
import { QUERY_KEY } from '@/constants/queryKey';
import { updateUserProfile } from '@/utils/api/userProfile';

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
