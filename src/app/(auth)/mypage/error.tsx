'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import Error from '@/components/features/mypage/layout/Error';
import { Button } from '@/components/ui/button';
import { PATH } from '@/constants/routerPath';

const ErrorPage = ({ reset }: { reset: () => void }) => {
  const [isHomePending, startHomeTransition] = useTransition();
  const [isResetPending, startResetTransition] = useTransition();
  const router = useRouter();

  const handleBackHome = () => {
    startHomeTransition(() => {
      router.push(PATH.HOME);
    });
  };

  const handleReset = () => {
    startResetTransition(() => {
      reset();
    });
  };

  return (
    <Error errorMessage='오류가 발생했습니다. 다시 시도하시겠어요?'>
      <Button
        onClick={handleReset}
        className='w-32 font-semibold text-white'
        disabled={isResetPending}
      >
        {isResetPending ? '다시 시도하는 중...' : 'Try Again'}
      </Button>
      <Button
        onClick={handleBackHome}
        disabled={isHomePending}
        className='w-32 bg-white py-2.5 font-semibold text-black01 hover:bg-gray01 hover:text-gray03'
      >
        {isHomePending ? '이동 중...' : 'Go Back Home'}
      </Button>
    </Error>
  );
};

export default ErrorPage;
