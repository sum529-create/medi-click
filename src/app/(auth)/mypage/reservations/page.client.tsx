'use client';
import { useEffect, useState } from 'react';
import Loading from '@/components/common/Loading';
import ReservationsPage from '@/components/features/mypage/hospitalReservations/Reservations';
import MainContentsContainer from '@/components/features/mypage/MainContentsContainer';
import MainContentsTitleBox from '@/components/features/mypage/MainContentsTitleBox';
import ReservationList from '@/components/features/mypage/myReservations/ReservationList';
import { STATE_WRAPPER_STYLE } from '@/constants/styles';
import { useAccountStore } from '@/utils/zustand/useAccountStore';

const ReserveListClientPage = ({ userId }: { userId: string | undefined }) => {
  const isHospitalAccount = useAccountStore((state) => state.isHospitalAccount);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isHospitalAccount !== undefined) {
      setIsLoading(true);
    }
  }, [isHospitalAccount]);

  if (!isLoading) {
    return (
      <div className={STATE_WRAPPER_STYLE}>
        <Loading size={100} />
      </div>
    );
  }

  return (
    <>
      {!isHospitalAccount ? (
        <MainContentsContainer>
          <MainContentsTitleBox title='내 예약 목록' />
          <ReservationList userId={userId} />
        </MainContentsContainer>
      ) : (
        <ReservationsPage />
      )}
    </>
  );
};

export default ReserveListClientPage;
