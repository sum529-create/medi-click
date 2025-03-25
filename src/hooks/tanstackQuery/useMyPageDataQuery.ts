'use client';

import { useQuery } from '@tanstack/react-query';

interface ReturnValue<T> {
  isPending: boolean;
  isError: boolean;
  error: Error | null;
  data: T;
}

/**
 * 마이페이지에서 사용하는 데이터를 불러오는 훅입니다.
 * useQuery 훅과 api 함수를 사용하여 데이터를 받아온 후 반환합니다.
 * data가 존재하지 않으면 early return 후  { isError, isPending, error }를 반환합니다.
 * 그렇지 않은 경우엔 data가 보장된 상태이므로 data를 반환합니다.
 *
 * @param  { string } queryKey
 * @param  { () => Promise<T> } queryFn 받아올 데이터에 따른 api 요청 함수
 *
 * @returns { Partial<ReturnValue<T>> } { isError, isPending, error, data }
 */
export const useMyPageDataQuery = <T>(
  queryKey: string,
  queryFn: () => Promise<T>,
): Partial<ReturnValue<T>> => {
  const { data, isError, isPending, error } = useQuery({
    queryKey: [queryKey],
    queryFn: queryFn,
  });

  if (!data) return { isError, isPending, error };

  return { data };
};
