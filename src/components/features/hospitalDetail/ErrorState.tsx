'use client';

import React from 'react';

interface ErrorType {
  children: React.ReactNode;
}

const ErrorState = ({ children }: ErrorType) => {
  return (
    <div className='border-gray mb-[130px] rounded-lg border p-6 text-center'>
      <h3 className='mb-2 text-lg font-medium'>
        데이터를 불러오는 중 오류가 발생했습니다
      </h3>
      <p className='mb-4 text-sm'>{children}</p>
      <button
        className='rounded px-4 py-2'
        onClick={() => window.location.reload()}
      >
        새로고침
      </button>
    </div>
  );
};

export default ErrorState;
