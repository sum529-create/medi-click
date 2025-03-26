// 날짜 관련 함수들
export const formatDate = (date: Date) => {
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  });
};

export const formatShortDate = (date: Date) => {
  return date.toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric',
  });
};

export const getPreviousDay = (currentDate: Date) => {
  const prevDate = new Date(currentDate);
  prevDate.setDate(prevDate.getDate() - 1);
  return prevDate;
};

export const getNextDay = (currentDate: Date) => {
  const nextDate = new Date(currentDate);
  nextDate.setDate(nextDate.getDate() + 1);
  return nextDate;
};
