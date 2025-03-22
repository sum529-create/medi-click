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

  switch (funnel.step) {
    case 'datePage':
      return (
        <CalendarFunnel
          date={funnel.context.date as string}
          onNext={(date) => funnel.history.push('timePage', { date })}
        />
      );
    case 'timePage':
      return (
        <TimeFunnel
          date={funnel.context.date}
          onNext={(time) => funnel.history.push('submitPage', { time })}
          onPrev={(date) => funnel.history.replace('datePage', { date })}
        />
      );
    case 'submitPage':
      return <FormFunnel onPrev={() => funnel.history.replace('timePage')} />;
    default:
      return <div>ReservePage</div>;
  }
};

export default ReservePage;
