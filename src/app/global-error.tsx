'use client';

import { useTransition } from 'react';
import Error from '@/components/features/mypage/layout/Error';
import { Button } from '@/components/ui/button';

const GlobalErrorPage = ({ reset }: { reset: () => void }) => {
  const [isPending, startTransition] = useTransition();

  const handleReset = () => {
    startTransition(() => {
      reset();
    });
  };

  return (
    <html>
      <body>
        <Error errorMessage='큰일이에요! 예기치 않은 오류가 발생했습니다.'>
          <Button
            onClick={handleReset}
            className='w-32 font-semibold text-white'
            disabled={isPending}
          >
            {isPending ? '다시 시도하는 중...' : 'Try Again'}
          </Button>
        </Error>
      </body>
    </html>
  );
};
export default GlobalErrorPage;
