'use client';

import Loading from '@/components/common/Loading';
import HospitalBasicInfo from '@/components/features/hospitalDetail/HospitalBasicInfo';
import InfoSection from '@/components/features/hospitalDetail/InfoSection';

import { useHospitalSchedule } from '@/hooks/hospitalDetail/useHospitalSchedule';
import { convertToTimeFormat } from '@/utils/func/convertToTimeFormat';
import { getOfficeWeeks } from '@/utils/func/getOfficeWeeks';
import ErrorState from './ErrorState';
import ReviewSection from './ReviewSection';
export interface HospitalSectionType {
  hpid: string;
}

const HospitalSection = ({ hpid }: HospitalSectionType) => {
  const STATE_WRAPPER_STYLE =
    'flex h-[calc(100vh_-_80px)] w-full items-center justify-center';

  const {
    data: {
      hospitalData,
      infoData,
      reviewData,
      schedule: { dutyTimes, restWeeks },
    },
    status: { isPending, isError, error },
  } = useHospitalSchedule({ hpid });

  const {
    dutyAddr = '',
    dutyTel1 = '',
    dutyName = '',
    dgidIdName = '',
  } = hospitalData ?? {};

  const { etc, info, department } =
    typeof infoData === 'object' ? infoData : {};

  // 로딩 상태 UI 개선
  if (isPending) {
    return (
      <div className={STATE_WRAPPER_STYLE}>
        <Loading size={100} />
      </div>
    );
  }

  // 에러 상태 UI 개선
  if (isError) {
    return (
      <div className={STATE_WRAPPER_STYLE}>
        <ErrorState>
          {error?.message || '알 수 없는 오류가 발생했습니다.'}
        </ErrorState>
      </div>
    );
  }

  return (
    <div className='relative my-10 box-border flex h-[100vh_-_80px] w-full items-end break-words p-6 md:p-8 lg:my-20'>
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
            {dutyTimes.map(([endTimeKey, startTimeKey], i) => {
              return (
                <p key={i}>
                  {` ${getOfficeWeeks(endTimeKey)} : ${convertToTimeFormat(hospitalData[startTimeKey].toString())} ~ ${convertToTimeFormat(hospitalData[endTimeKey].toString())}`}
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
        <ReviewSection review={Array.isArray(reviewData) ? reviewData : []} />
      </div>
    </div>
  );
};

export default HospitalSection;
