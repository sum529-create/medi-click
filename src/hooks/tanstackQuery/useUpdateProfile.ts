'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
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
    },
    onError: (error) => console.log('프로필 수정 실패', error),
  });

  return updateProfile;
};
