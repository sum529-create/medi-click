import { WEEKS } from '@/constants/hospitalConstants';

/**
 * 병원 상세 진료정보 - 진료시간의 요일 조회
 * @param day
 * @returns
 */
export const getOfficeWeeks = (day: string) => {
  const idx = Number(day.slice(-2, -1)) - 1;
  return WEEKS[idx] || '알 수 없음';
};
