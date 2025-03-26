'use client';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Loading from '@/components/common/Loading';
import { QUERY_KEY } from '@/constants/queryKey';
import { getHospitalReservationList } from '@/utils/api/hospitalReservationList';
import {
  formatShortDate,
  formatToDateString,
  getNextDay,
  getPreviousDay,
} from '@/utils/func/formatDate';
import { useAuthStore } from '@/utils/zustand/useAuthStore';
import DateNavigation from './DateNavigation';
import ReservationBanner from './ReservationBanner';
import ReservationTable from './ReservationTable';

const ReservationsPage = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const { name } = useAuthStore((state) => state.userData);

  const { data, isPending, isError, error } = useQuery({
    queryKey: [QUERY_KEY.HOSPITAL_RESERVATION_LIST, currentDate, name],
    queryFn: () =>
      getHospitalReservationList({
        date: formatToDateString(getNextDay(currentDate)),
        name: name,
      }),
    enabled: !!currentDate && !!name,
  });

  if (isPending) {
    <div>
      <Loading size={100} />
    </div>;
  }

  if (isError) {
    <div>
      <p>데이터를 불러오는 것을 실패하였습니다:{error.message}</p>
    </div>;
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <ReservationBanner
        hospitalName={name}
        patientCount={data?.length || 0}
        currentDate={currentDate}
        onChangeDate={setCurrentDate}
      />

      <div className='my-6'>
        <DateNavigation
          previousDate={formatShortDate(getPreviousDay(currentDate))}
          currentDate={formatShortDate(currentDate)}
          nextDate={formatShortDate(getNextDay(currentDate))}
          onPreviousClick={() => setCurrentDate(getPreviousDay(currentDate))}
          onNextClick={() => setCurrentDate(getNextDay(currentDate))}
        />
      </div>
      <p className='my-2 text-red'>
        * 해당 환자의 예약을 확정하려면 &apos;대기 중&apos; 버튼을 클릭하세요
      </p>
      <ReservationTable reservations={data || []} />
    </div>
  );
};

export default ReservationsPage;
