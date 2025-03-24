'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/queryKey';
import { getAllHospitalData } from '@/utils/api/hospitals';

/**
 * 병원 목록을 10개 단위로 무한 스크롤할 수 있게 해주는 훅
 * @returns useInfiniteQuery
 */
export const useHospitalsInfiniteQuery = () => {
  const HOSPITAL_PAGE_SIZE = 10;

  return useInfiniteQuery({
    queryKey: [QUERY_KEY.HOSPITAL],
    queryFn: ({ pageParam = 1 }) => getAllHospitalData(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.length === HOSPITAL_PAGE_SIZE
        ? allPages.length + 1
        : undefined;
    },
  });
};
