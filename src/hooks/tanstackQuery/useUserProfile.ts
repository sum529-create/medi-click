'use client';

import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/queryKey';
import { Database } from '@/types/supabase';
import { getUserProfile } from '@/utils/api/userProfile';

interface UseUserProfileReturnValue {
  isProfilePending: boolean;
  isProfileError: boolean;
  getProfileError: Error | null;
  profile: Database['public']['Tables']['users']['Row'];
}

/**
 * 현재 로그인 된 사용자의 회원 정보를 불러오는 훅입니다.
 * useQuery 훅과 getUserProfile api 함수를 사용하여 데이터를 받아온 후 첫번째 인덱스에 있는 데이터를 반환합니다.
 * 유저 정보는 user id당 하나만 존재하기 때문에 하나의 인덱스만 존재하기에 첫번째 인덱스를 반환하는 것으로 처리했습니다.
 * profileData가 존재하지 않으면 early return 후  { isProfileError, isProfilePending, getProfileError }를 반환합니다.
 * 그렇지 않은 경우엔 profileData가 보장된 상태이므로 profileData[0]을 반환합니다.
 *
 * @returns { isProfilePending, isProfileError, getProfileError, profile }
 */
export const useUserProfile = (): Partial<UseUserProfileReturnValue> => {
  const {
    data: profileData,
    isError: isProfileError,
    isPending: isProfilePending,
    error: getProfileError,
  } = useQuery({
    queryKey: [QUERY_KEY.USER],
    queryFn: getUserProfile,
  });

  if (!profileData)
    return { isProfileError, isProfilePending, getProfileError };

  const profile = profileData[0];

  return { profile };
};
