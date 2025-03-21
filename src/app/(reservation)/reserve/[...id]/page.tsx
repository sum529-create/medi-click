'use client';

import { useFunnel } from '@use-funnel/browser';
import CalendarFunnel from '@/components/features/reserve/CalendarCard';
import FormCard from '@/components/features/reserve/FormCard';
import ReserveTimeCard from '@/components/features/reserve/ReserveTimeCard';
import { date, other, time } from '@/types/context';

const ReservePage = () => {
  const funnel = useFunnel<{
    날짜입력: date;
    시간입력: time;
    그외정보입력: other;
  }>({
    id: 'my-funnel-app',
    initial: {
      step: '날짜입력',
      context: {},
    },
  });

  switch (funnel.step) {
    case '날짜입력':
      return (
        <CalendarFunnel
          onNext={(date) => funnel.history.push('시간입력', { date })}
        />
      );
    case '시간입력':
      return (
        <ReserveTimeCard
          onNext={(time) => funnel.history.push('그외정보입력', { time })}
          onPrev={() => funnel.history.replace('날짜입력')}
        />
      );
    case '그외정보입력':
      return <FormCard onPrev={() => funnel.history.replace('시간입력')} />;
    default:
      return <div>ReservePage</div>;
  }
};

export default ReservePage;
