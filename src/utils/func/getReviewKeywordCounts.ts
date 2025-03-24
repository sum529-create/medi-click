import { ReviewDataType } from '@/components/features/hospitalDetail/ReviewSection';
import { REVIEW_TEXTS } from '@/constants/hospitalConstants';

/**
 * getReviewKeywordCounts
 * 해당 병원의 리뷰 수 조회
 * @param review ('친절해요' | '진료 대기가 없어요' | '시설이 좋고 청결해요' | '전문적이에요')
 * @returns 각 항목의 count값, 전체 total값
 */
export const getReviewKeywordCounts = ({ review }: ReviewDataType) => {
  const reviewCnt = review.reduce((a, c) => {
    a.set(c, (a.get(c) || 0) + 1);
    return a;
  }, new Map());

  const result = REVIEW_TEXTS.map((e) => reviewCnt.get(e) || 0);
  const total = result.reduce((a, c) => a + c, 0);

  return { result, total };
};
