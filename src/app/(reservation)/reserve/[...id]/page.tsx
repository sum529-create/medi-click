'use client';

import { useFunnel } from '@use-funnel/browser';
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

  const { data: name, isPending } = useHospitalName(params.id);

  if (isPending) return <Loading size={100} />;

  return (
    <funnel.Render
      datePage={({ history }) => (
        <CalendarFunnel
          date={funnel.context.date as string}
          onNext={(date) => history.push('timePage', { date })}
        />
      )}
      timePage={({ context, history }) => (
        <TimeFunnel
          date={context.date}
          time={context.time as string}
          onNext={(time) => history.push('submitPage', { time })}
          onPrev={(date) => history.replace('datePage', { date })}
        />
      )}
      submitPage={({ context, history }) => (
        <FormFunnel
          date={context.date as string}
          time={context.time as string}
          other={context.other as unknown}
          name={name as string}
          onPrev={() => history.replace('timePage')}
        />
      )}
    />
  );
};

export default ReservePage;
