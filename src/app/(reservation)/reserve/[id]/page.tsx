'use client';

import { useFunnel } from '@use-funnel/browser';
import { useEffect } from 'react';
import Loading from '@/components/common/Loading';
import CalendarFunnel from '@/components/features/reserve/CalendarFunnel';
import FormFunnel from '@/components/features/reserve/FormFunnel';
import TimeFunnel from '@/components/features/reserve/TimeFunnel';
import { STORAGE_KEY } from '@/constants/StorageKey';
import { useHospitalName } from '@/hooks/map/useHospitalName';
import { ReservationData } from '@/types/context';

interface Params {
  params: {
    id: string;
  };
}

const ReservePage = ({ params }: Params) => {
  const funnel = useFunnel<{
    datePage: ReservationData;
    timePage: ReservationData;
    submitPage: ReservationData;
  }>({
    id: 'my-reservation',
    initial: {
      step: 'datePage',
      context: {},
    },
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY.RESERVATION, '{}');
    funnel.history.replace('datePage');
  }, []);

  const { data, isPending } = useHospitalName(params.id);

  if (isPending) return <Loading size={100} />;

  return (
    <funnel.Render
      datePage={({ history }) => (
        <CalendarFunnel
          onNext={() => {
            history.push('timePage');
          }}
        />
      )}
      timePage={({ history }) => (
        <TimeFunnel
          operationTime={data?.operationTime}
          onNext={() => history.push('submitPage')}
          onPrev={() => history.replace('datePage')}
        />
      )}
      submitPage={({ history }) => (
        <FormFunnel
          name={data?.name as string}
          id={params.id}
          onPrev={() => history.replace('timePage')}
        />
      )}
    />
  );
};

export default ReservePage;
