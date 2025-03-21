import React from 'react';

interface ProgressBarType {
  reviewText: string;
  score: number;
  total: number;
}
const ProgressBar = ({ reviewText, score, total }: ProgressBarType) => {
  const percentage = (score / total) * 100;
  return (
    <div className='relative mt-1 h-[66px] w-full rounded-2xl border-2 border-main'>
      <div
        className='h-16 rounded-2xl bg-main'
        style={{ width: `${percentage}%` }}
      ></div>
      <div className='absolute top-0 flex w-full justify-between p-[18px]'>
        <span className='text-xl text-black02'>{reviewText}</span>
        <span className='text-xl text-black02'>{score}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
