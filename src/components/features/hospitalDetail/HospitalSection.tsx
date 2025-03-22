'use client';

import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import HospitalBasicInfo from '@/components/features/hospitalDetail/HospitalBasicInfo';
import InfoSection from '@/components/features/hospitalDetail/InfoSection';
import ReviewSection from '@/components/features/hospitalDetail/ReviewSection';
import { HOSPITAL_DETAIL_QUERY } from '@/constants/queryKey';
import hospitalDetail from '@/utils/api/hospitalDetail';
import { convertToTimeFormat } from '@/utils/func/convertToTimeFormat';
interface HospitalSectionType {
  hpid: string;
}

const HospitalSection = ({ hpid }: HospitalSectionType) => {
  const WEEKS = useMemo(() => ['월', '화', '수', '목', '금', '토', '일'], []);
  const {
    data: hospitalData,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: [HOSPITAL_DETAIL_QUERY, hpid],
    queryFn: () => hospitalDetail(hpid, { isServer: false }),
    enabled: !!hpid,
  });

  const {
    dutyAddr = '',
    dutyTel1 = '',
    dutyName = '',
    dgidIdName = '',
  } = hospitalData || {};

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
  }, [hospitalData, WEEKS]);

  // 로딩 상태 UI 개선
  if (isPending) {
    return (
      <div className='flex min-h-[50vh] items-center justify-center p-8'>
        <div className='h-12 w-12 animate-spin rounded-full border-b-2 border-blue-500'></div>
        <span className='ml-3 text-gray-600'>
          병원 정보를 불러오는 중입니다...
        </span>
      </div>
    );
  }

  // 에러 상태 UI 개선
  if (isError) {
    return (
      <div className='bg-red-50 border-red-200 rounded-lg border p-6 text-center'>
        <h3 className='text-red-800 mb-2 text-lg font-medium'>
          데이터를 불러오는 중 오류가 발생했습니다
        </h3>
        <p className='text-red-700 mb-4 text-sm'>
          {error instanceof Error
            ? error.message
            : '알 수 없는 오류가 발생했습니다.'}
        </p>
        <button
          className='bg-red-100 text-red-700 hover:bg-red-200 rounded px-4 py-2 transition-colors'
          onClick={() => window.location.reload()}
        >
          새로고침
        </button>
      </div>
    );
  }

  return (
    <div className='md:p-8" relative my-10 flex h-[100vh-80px] items-end break-words p-6 lg:my-20'>
      <div className='mx-auto my-0 flex max-w-screen-xl flex-1 flex-col justify-center'>
        <HospitalBasicInfo
          dutyAddr={dutyAddr}
          dutyTel1={dutyTel1}
          dutyName={dutyName}
          dgidIdName={dgidIdName}
        />
        <InfoSection title='진료 정보'>
          <div>
            <b>진료 시간</b>
            {dutyTimes.map((e, i) => {
              return (
                <p key={i}>
                  {` ${WEEKS[Number(e[0].slice(-2, -1)) - 1]} : ${convertToTimeFormat(hospitalData[e[1]].toString())} ~ ${convertToTimeFormat(hospitalData[e[0]].toString())}`}
                </p>
              );
            })}
          </div>
          {restWeeks.length > 0 && (
            <p>
              <span className='text-red'>휴무</span>:{restWeeks.join(', ')}
            </p>
          )}
        </InfoSection>
        <InfoSection title='병원 정보'>
          <p>아토피, 천식 등의 소아 전문 치료</p>
        </InfoSection>
        <ReviewSection />
      </div>
    </div>
  );
};

export default HospitalSection;
