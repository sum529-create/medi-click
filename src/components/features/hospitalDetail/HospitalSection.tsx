'use client';

import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';
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
  const [dutyTimes, setDutyTimes] = useState<string[][]>([]);
  const [restWeeks, setRestWeeks] = useState<string[]>([]);

  const WEEKS = useMemo(() => ['월', '화', '수', '목', '금', '토', '일'], []);
  const {
    data: hospitalData,
    isPending,
    isError,
  } = useQuery({
    queryKey: [HOSPITAL_DETAIL_QUERY, hpid],
    queryFn: () => hospitalDetail(hpid, { isServer: false }),
  });

  const {
    dutyAddr = '',
    dutyTel1 = '',
    dutyName = '',
    dgidIdName = '',
  } = hospitalData || {};

  useEffect(() => {
    if (hospitalData) {
      const dutyTimekeys = Object.keys(hospitalData).filter((e) =>
        e.includes('dutyTime'),
      );
      const dutyTimeArr = dutyTimekeys.reduce<string[][]>((a, _, i, arr) => {
        if (i % 2 === 0) a.push([arr[i], arr[i + 1]]);
        return a;
      }, []);

      const operationWeek = dutyTimeArr.map(
        (e) => Number(e[0].slice(-2, -1)) - 1,
      );
      const restWeeksArr = WEEKS.filter((_, i) => !operationWeek.includes(i));

      setRestWeeks(restWeeksArr);
      setDutyTimes(dutyTimeArr);
    }
  }, [hospitalData, WEEKS]);

  if (isPending) {
    return <div>로딩중</div>;
  }
  if (isError) {
    return <div>에러 발생</div>;
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
