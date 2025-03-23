'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '@/constants/queryKey';
import { getAllHospitalData } from '@/utils/api/hospitals';

export const useHospitalsInfiniteQuery = () => {
  return useInfiniteQuery({
    queryKey: [QUERY_KEY.HOSPITAL],
    queryFn: ({ pageParam = 1 }) => getAllHospitalData(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage?.length === 10 ? allPages.length + 1 : undefined;
    },
  });
};
