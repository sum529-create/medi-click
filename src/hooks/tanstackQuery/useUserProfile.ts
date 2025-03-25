'use client';

import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/queryKey';
import { getUserProfile } from '@/utils/api/userProfile';

interface Profile {
  birth: string;
  created_at: string;
  id: string;
  name: string;
  phone_number: string;
  avatar_path?: string;
}

interface UseUserProfileReturnValue {
  isProfilePending: boolean;
  isProfileError: boolean;
  getProfileError: Error | null;
  profile: Profile;
}

/**
 * 현재 로그인 된 사용자의 회원 정보를 불러오는 훅입니다.
 * useQuery 훅과 getUserProfile api 함수를 사용하여 데이터를 받아온 후 반환합니다.
 * profileData가 존재하지 않으면 early return 후  { isProfileError, isProfilePending, getProfileError }를 반환합니다.
 * 그렇지 않은 경우엔 profile 보장된 상태이므로 profile을 반환합니다.
 *
 * @returns { isProfilePending, isProfileError, getProfileError, profile }
 */
export const useUserProfile = (): Partial<UseUserProfileReturnValue> => {
  const {
    data: profile,
    isError: isProfileError,
    isPending: isProfilePending,
    error: getProfileError,
  } = useQuery({
    queryKey: [QUERY_KEY.USER],
    queryFn: getUserProfile,
  });

  if (!profile) return { isProfileError, isProfilePending, getProfileError };

  return { profile };
};
