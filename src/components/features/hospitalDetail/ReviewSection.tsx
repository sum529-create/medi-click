import ProgressBar from './ProgressBar';

const ReviewSection = () => {
  const reviewTexts = [
    '친절해요',
    '진료 대기가 없어요',
    '시설이 좋고 청결해요',
    '전문적이에요',
  ];
  return (
    <div className='mt-[70px]'>
      <div className='mb-5 flex items-center justify-between'>
        <h4 className='text-2xl font-bold'>⭐ 병원 후기</h4>
        <span className='text-xl'>총 40개</span>
      </div>
      <div className='mt-4 flex flex-col gap-4'>
        {reviewTexts.map((e, i) => (
          <ProgressBar key={i} score={10} total={40} reviewText={e} />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
