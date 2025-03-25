'use client';
import { useMemo } from 'react';
import { WEEKS } from '@/constants/hospitalConstants';
import { HospitalDataType } from '@/types/components/hospitalDetail/hospitalInfoData';
import { convertToTimeFormat } from '@/utils/func/convertToTimeFormat';
import { getOfficeWeeks } from '@/utils/func/getOfficeWeeks';

interface Props {
  hospitalData: HospitalDataType;
  etc: string | null | undefined;
}

const MedicalHours = ({ hospitalData, etc }: Props) => {
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
  return (
    <>
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
    </>
  );
};

export default MedicalHours;
