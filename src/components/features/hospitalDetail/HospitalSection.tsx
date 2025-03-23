'use client';

import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import Loading from '@/components/common/Loading';
import HospitalBasicInfo from '@/components/features/hospitalDetail/HospitalBasicInfo';
import InfoSection from '@/components/features/hospitalDetail/InfoSection';
import { QUERY_KEY } from '@/constants/queryKey';
import hospitalDetail, {
  hospitalDetailInfoSection,
  hospitalDetailReviews,
} from '@/utils/api/hospitalDetail';
import { convertToTimeFormat } from '@/utils/func/convertToTimeFormat';
import ReviewSection from './ReviewSection';
interface HospitalSectionType {
  hpid: string;
}

const HospitalSection = ({ hpid }: HospitalSectionType) => {
  const WEEKS = useMemo(
    () => ['월', '화', '수', '목', '금', '토', '일', '공휴일'],
    [],
  );
  const STATE_WRAPPER_STYLE =
    'flex h-[calc(100vh_-_80px)] w-full items-center justify-center';
  const {
    data: hospitalData,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: [QUERY_KEY.HOSPITAL_DETAIL, hpid],
    queryFn: () => hospitalDetail(hpid, { isServer: false }),
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

  const {
    dutyAddr = '',
    dutyTel1 = '',
    dutyName = '',
    dgidIdName = '',
  } = hospitalData || {};

  const { etc, info, department } = infoData || {};

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
  if (isPending || isInfoPending || isReviewPending) {
    return (
      <div className={STATE_WRAPPER_STYLE}>
        <Loading size={100} />
      </div>
    );
  }

  // 에러 상태 UI 개선
  if (isError || isInfoError || isReviewError) {
    return (
      <div className={STATE_WRAPPER_STYLE}>
        <div className='border-gray mb-[130px] rounded-lg border p-6 text-center'>
          <h3 className='mb-2 text-lg font-medium'>
            데이터를 불러오는 중 오류가 발생했습니다
          </h3>
          <p className='mb-4 text-sm'>
            {error instanceof Error ||
            infoError instanceof Error ||
            reviewError instanceof Error
              ? error?.message || infoError?.message
              : '알 수 없는 오류가 발생했습니다.'}
          </p>
          <button
            className='rounded px-4 py-2'
            onClick={() => window.location.reload()}
          >
            새로고침
          </button>
        </div>
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
          department={department || ''}
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
          {etc && <p>{etc}</p>}
          {restWeeks.length > 0 && (
            <p>
              <span className='text-red'>휴무</span>:{restWeeks.join(', ')}
            </p>
          )}
        </InfoSection>
        {(dgidIdName || info) && (
          <InfoSection title='병원 정보'>
            <p>{dgidIdName}</p>
            <p>{info}</p>
          </InfoSection>
        )}
        <ReviewSection review={reviewData || []} />
      </div>
    </div>
  );
};

export default HospitalSection;
