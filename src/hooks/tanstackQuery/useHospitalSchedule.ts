'use client';

import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { HospitalSectionType } from '@/components/features/hospitalDetail/HospitalSection';
import { WEEKS } from '@/constants/hospitalConstants';
import { QUERY_KEY } from '@/constants/queryKey';
import hospitalDetail, {
  hospitalDetailInfoSection,
  hospitalDetailReviews,
} from '@/utils/api/hospitalDetail';

export const useHospitalSchedule = ({ hpid }: HospitalSectionType) => {
  const {
    data: hospitalData,
    isPending: isHospitalPending,
    isError: isHospitalError,
    error: hospitalError,
  } = useQuery({
    queryKey: [QUERY_KEY.HOSPITAL_DETAIL, hpid],
    queryFn: () => hospitalDetail(hpid),
    enabled: !!hpid,
  });

  const {
    data: infoData,
    isPending: isInfoPending,
    isError: isInfoError,
    error: infoError,
  } = useQuery({
    queryKey: [QUERY_KEY.HOSPITAL_DETAIL_INFO, hpid],
    queryFn: () => hospitalDetailInfoSection(hpid),
    enabled: !!hpid,
  });

  const {
    data: reviewData,
    isPending: isReviewPending,
    isError: isReviewError,
    error: reviewError,
  } = useQuery({
    queryKey: [QUERY_KEY.HOSPITAL_REVIEW, hpid],
    queryFn: () => hospitalDetailReviews(hpid),
    enabled: !!hpid,
  });

  // 진료 시간 및 휴무일 계산 - useMemo로 변경하여 성능 최적화
  const { dutyTimes, restWeeks } = useMemo(() => {
    if (!hospitalData) {
      return { dutyTimes: [], restWeeks: [] };
    }

    // 진료 시간 키 필터링
    const dutyTimekeys = Object.keys(hospitalData).filter((key) =>
      key.includes('dutyTime'),
    );

    // 쌍으로 그룹화
    const dutyTimeArr = dutyTimekeys.reduce<string[][]>(
      (acc, _, index, arr) => {
        if (index % 2 === 0) {
          acc.push([arr[index], arr[index + 1]]);
        }
        return acc;
      },
      [],
    );

    // 운영 요일 계산
    const operationWeek = dutyTimeArr.map(
      (pair) => Number(pair[0].slice(-2, -1)) - 1,
    );

    // 휴무일 계산
    const restWeeksArr = WEEKS.filter(
      (_, index) => !operationWeek.includes(index),
    );

    return { dutyTimes: dutyTimeArr, restWeeks: restWeeksArr };
  }, [hospitalData]);

  return {
    hospitalData,
    isHospitalPending,
    isHospitalError,
    hospitalError,
    infoData,
    isInfoPending,
    isInfoError,
    infoError,
    reviewData,
    isReviewPending,
    isReviewError,
    reviewError,
    dutyTimes,
    restWeeks,
  };
};
