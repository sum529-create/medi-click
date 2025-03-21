/**
 * calculatePercentage
 *
 * - 전체 total값과 score값을 받아 퍼센테이지를 계산하는 함수
 * - score: number
 * - total: number
 */
interface CalculateType {
  score: number;
  total: number;
}
export const calculatePercentage = ({ score, total }: CalculateType) => {
  const percentage = (score / total) * 100;
  return percentage;
};
