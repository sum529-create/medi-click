'use client';
import { useState } from 'react';
import {
  formatDate,
  formatShortDate,
  getNextDay,
  getPreviousDay,
} from '@/utils/func/formatDate';
import DateNavigation from './DateNavigation';
import ReservationBanner from './ReservationBanner';
import ReservationTable from './ReservationTable';

const ReservationsPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // 예약 데이터 (실제로는 API에서 가져올 것)
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
