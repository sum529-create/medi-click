'use client';

import { useMemo } from 'react';
import { HospitalSectionType } from '@/components/features/hospitalDetail/HospitalSection';
import { WEEKS } from '@/constants/hospitalConstants';
import { HospitalScheduleResult } from '@/types/components/hospitalDetail/hospitalInfoData';
import {
  useGetHospitalDetail,
  useGetHospitalInfo,
  useGetHospitalReview,
} from '../tanstackQuery/useHospitalInfo';

export const useHospitalSchedule = ({
  hpid,
}: HospitalSectionType): HospitalScheduleResult => {
  const {
    data: hospitalData,
    isPending: isHospitalPending,
    isError: isHospitalError,
    error: hospitalError,
  } = useGetHospitalDetail(hpid);

  const {
    data: infoData,
    isPending: isInfoPending,
    isError: isInfoError,
    error: infoError,
  } = useGetHospitalInfo(hpid);

  const {
    data: reviewData,
    isPending: isReviewPending,
    isError: isReviewError,
    error: reviewError,
  } = useGetHospitalReview(hpid);

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

    console.log(dutyTimeArr);

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

  const isPending = isHospitalPending || isInfoPending || isReviewPending;
  const isError = isHospitalError || isInfoError || isReviewError;
  const error = hospitalError || infoError || reviewError;

  return {
    data: {
      hospitalData,
      infoData,
      reviewData,
      schedule: {
        dutyTimes,
        restWeeks,
      },
    },
    status: {
      isPending,
      isError,
      error,
    },
  };
};
