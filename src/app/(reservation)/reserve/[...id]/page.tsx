'use client';

import { useFunnel } from '@use-funnel/browser';
import { useEffect } from 'react';
import Loading from '@/components/common/Loading';
import CalendarFunnel from '@/components/features/reserve/CalendarFunnel';
import FormFunnel from '@/components/features/reserve/FormFunnel';
import TimeFunnel from '@/components/features/reserve/TimeFunnel';
import { useHospitalName } from '@/hooks/map/useHospitalName';
import { date, other, time } from '@/types/context';

interface Params {
  params: {
    id: string;
  };
}

const ReservePage = ({ params }: Params) => {
  const funnel = useFunnel<{
    datePage: date;
    timePage: time;
    submitPage: other;
  }>({
    id: 'my-reservation',
    initial: {
      step: 'datePage',
      context: {},
    },
  });

  useEffect(() => {
    localStorage.setItem('reservationForm', JSON.stringify(funnel.context));
    console.log(JSON.parse(localStorage.getItem('reservationForm') || '{}'));
  }, [funnel.context]);

  const { data, isPending } = useHospitalName(params.id);

  if (isPending) return <Loading size={100} />;

  return (
    <funnel.Render
      datePage={({ context, history }) => (
        <CalendarFunnel
          date={context.date as string}
          time={context.time as string}
          onNext={(date, time) => {
            history.push('timePage', { date });
          }}
        />
      )}
      timePage={({ context, history }) => (
        <TimeFunnel
          date={context.date}
          time={context.time as string}
          operationTime={data?.operationTime}
          onNext={(date, time) => history.push('submitPage', { date, time })}
          onPrev={(date) => history.replace('datePage', { date })}
        />
      )}
      submitPage={({ context, history }) => (
        <FormFunnel
          date={context.date as string}
          time={context.time as string}
          other={context.other as unknown}
          name={data?.name as string}
          onPrev={() => history.replace('timePage')}
        />
      )}
    />
  );
};

export default ReservePage;
