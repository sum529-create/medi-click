import { WEEKS } from '@/constants/hospitalConstants';

export const getOfficeHours = (day: string) => {
  const idx = Number(day.slice(-2, -1)) - 1;
  return WEEKS[idx] || '알 수 없음';
};
