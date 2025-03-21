export const getCalendarDate = (date: Date | undefined) => {
  if (date === undefined) {
    return '';
  }
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${month}월 ${day}일`;
};
