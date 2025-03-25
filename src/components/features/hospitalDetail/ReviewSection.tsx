import Text from '@/components/ui/Text';
import { REVIEW_TEXTS } from '@/constants/hospitalConstants';
import { getReviewKeywordCounts } from '@/utils/func/getReviewKeywordCounts';
import ProgressBar from './ProgressBar';
export interface ReviewDataType {
  review: (
    | '친절해요'
    | '진료 대기가 없어요'
    | '시설이 좋고 청결해요'
    | '전문적이에요'
    | null
  )[];
}

const ReviewSection = ({ review }: ReviewDataType) => {
  const { total, result } = getReviewKeywordCounts({ review });

  return (
    <div className='mt-[70px]'>
      <div className='mb-5 flex items-center justify-between'>
        <Text size='2xl' color='black01' isBold={true}>
          ⭐ 병원 후기
        </Text>
        <Text size='xl' color='black01'>
          총 {total}개
        </Text>
      </div>
      <div className='mt-4 flex flex-col gap-4'>
        {total > 0 ? (
          REVIEW_TEXTS.map((e, i) => (
            <ProgressBar
              key={i}
              score={result[i]}
              total={total}
              reviewText={e}
            />
          ))
        ) : (
          <div className='h-52 content-center self-center text-center'>
            <Text size='lg' color='black01'>
              후기가 없습니다.
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
