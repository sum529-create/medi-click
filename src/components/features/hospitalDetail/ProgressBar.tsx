import calculatePercentage from '@/utils/func/calculatePercentage';

interface ProgressBarType {
  reviewText: string;
  score: number;
  total: number;
}
const ProgressBar = ({ reviewText, score, total }: ProgressBarType) => {
  return (
    <div className='relative mt-1 h-16 w-full flex-1 rounded-2xl border-2 border-main'>
      <div
        className='h-16 rounded-xl bg-main'
        style={{ width: `${calculatePercentage({ score, total })}%` }}
      ></div>
      <div className='absolute top-0 flex h-16 w-full justify-between p-4'>
        <span className='text-xl text-black02'>{reviewText}</span>
        <span className='text-xl text-black02'>{score}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
