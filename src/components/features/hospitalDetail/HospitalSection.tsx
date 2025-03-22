'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import HospitalBasicInfo from '@/components/features/hospitalDetail/HospitalBasicInfo';
import InfoSection from '@/components/features/hospitalDetail/InfoSection';
import ReviewSection from '@/components/features/hospitalDetail/ReviewSection';
import { HOSPITAL_DETAIL_QUERY } from '@/constants/queryKey';
import hospitalDetail from '@/utils/api/hospitalDetail';
import { convertToTimeFormat } from '@/utils/func/convertToTimeFormat';

const HospitalSection = () => {
  const [dutyTimes, setDutyTimes] = useState<string[][]>([]);
  const [restWeeks, setRestWeeks] = useState<string[]>([]);
  const { id } = useParams();
  const hpid = id[0];
  const WEEKS = useMemo(() => ['월', '화', '수', '목', '금', '토', '일'], []);
  const {
    data: hospitalData,
    isPending,
    isError,
  } = useQuery({
    queryKey: [HOSPITAL_DETAIL_QUERY, hpid],
    queryFn: () => hospitalDetail(hpid),
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
    <div className='relative my-20 flex h-[100vh-80px] items-end'>
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
          <p>
            <span className='text-red'>휴무</span>:{restWeeks.join(', ')}
          </p>
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
