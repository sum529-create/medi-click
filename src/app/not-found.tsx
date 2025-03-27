'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import Error from '@/components/features/mypage/layout/Error';
import { Button } from '@/components/ui/button';
import { PATH } from '@/constants/routerPath';

const NotFoundPage = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleBackHome = () => {
    startTransition(() => {
      router.push(PATH.HOME);
    });
  };

  return (
    <Error errorMessage='잘못된 경로입니다.'>
      <Button
        onClick={handleBackHome}
        className='w-32 font-semibold text-white'
        disabled={isPending}
      >
        {isPending ? '이동 중...' : 'Go Back Home'}
      </Button>
    </Error>
  );
};

export default NotFoundPage;
