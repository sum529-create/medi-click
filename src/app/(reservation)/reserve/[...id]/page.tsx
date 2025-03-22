'use client';

import { useFunnel } from '@use-funnel/browser';
import CalendarFunnel from '@/components/features/reserve/CalendarFunnel';
import FormFunnel from '@/components/features/reserve/FormFunnel';
import TimeFunnel from '@/components/features/reserve/TimeFunnel';
import { date, other, time } from '@/types/context';

const ReservePage = () => {
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
          onNext={(time) => history.push('submitPage', { time })}
          onPrev={(date) => history.replace('datePage', { date })}
        />
      )}
      submitPage={({ context, history }) => (
        <FormFunnel onPrev={() => history.replace('timePage')} />
      )}
    />
  );
};

export default ReservePage;
