'use client';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { QUERY_KEY } from '@/constants/queryKey';
import { getHospitalReservationList } from '@/utils/api/hospitalReservationList';
import {
  formatDate,
  formatShortDate,
  formatToDateString,
  getNextDay,
  getPreviousDay,
} from '@/utils/func/formatDate';
import DateNavigation from './DateNavigation';
import ReservationBanner from './ReservationBanner';
import ReservationTable from './ReservationTable';

const ReservationsPage = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  const { data, isPending, isError, error } = useQuery({
    queryKey: [QUERY_KEY.HOSPITAL_RESERVATION_LIST],
    queryFn: () =>
      getHospitalReservationList({
        date: formatToDateString(currentDate),
        name: '아이세상소아청소년과의원',
      }),
  });
  const reservations = [
    {
      time: '09:00',
      name: '김땡땡',
      phone: '010-1234-5678',
      symptoms: '발열, 두통',
      status: 'waiting' as const,
    },
    {
      time: '10:30',
      name: '이땡땡',
      phone: '010-0000-0000',
      symptoms: '소화불량',
      status: 'confirmed' as const,
    },
  ];

  return (
    <div className='container mx-auto px-4 py-8'>
      <ReservationBanner
        hospitalName='서울통정형외과의원 잠실점'
        patientCount={reservations.length}
        currentDate={formatDate(currentDate)}
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

      <ReservationTable reservations={reservations} />
    </div>
  );
};

export default ReservationsPage;
