'use client';

import { useFunnel } from '@use-funnel/browser';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Loading from '@/components/common/Loading';
import CalendarFunnel from '@/components/features/reserve/CalendarFunnel';
import FormFunnel from '@/components/features/reserve/FormFunnel';
import TimeFunnel from '@/components/features/reserve/TimeFunnel';
import { PATH } from '@/constants/routerPath';
import { STORAGE_KEY } from '@/constants/StorageKey';
import { useHospitalName } from '@/hooks/reservation/useHospitalName';
import { ReservationData } from '@/types/context';
import { checkAuthClient } from '@/utils/access/protectedRouteClient';

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

  const router = useRouter();
  useEffect(() => {
    const checkAuthStatus = async () => {
      const isCheckAuth = await checkAuthClient();
      if (!isCheckAuth) {
        router.push(PATH.LOGIN);
      }
    };

    checkAuthStatus();
  }, [router]);

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
          id={params.id}
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
