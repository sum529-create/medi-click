'use client';

import { useFunnel } from '@use-funnel/browser';
import { useEffect } from 'react';
import Loading from '@/components/common/Loading';
import CalendarFunnel from '@/components/features/reserve/CalendarFunnel';
import FormFunnel from '@/components/features/reserve/FormFunnel';
import TimeFunnel from '@/components/features/reserve/TimeFunnel';
import { useHospitalName } from '@/hooks/map/useHospitalName';
// import { date, other, time } from '@/types/context';

interface Params {
  params: {
    id: string;
  };
}

const ReservePage = ({ params }: Params) => {
  const funnel = useFunnel<{
    datePage: any;
    timePage: any;
    submitPage: any;
  }>({
    id: 'my-reservation',
    initial: {
      step: 'datePage',
      context: {},
    },
  });

  useEffect(() => {
    localStorage.setItem('reservationForm', '{}');
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
          onPrev={() => history.replace('timePage')}
        />
      )}
    />
  );
};

export default ReservePage;
