// 달력에서 선택한 날짜를 0000년 00월 00일 형식으로 변환해주는 함수
// UI 출력용

export const getCalendarDate = (date: Date | undefined) => {
  if (date === undefined) {
    return '';
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}년 ${month}월 ${day}일`;
};

// 달력에서 선택한 날짜를 0000-00-00 or 0000-0-00 으로 변환해주는 함수
// Supabase 저장용

export const getSplitDate = (date: Date) => {
  const dateArr = [];

  dateArr.push(date.getFullYear());
  dateArr.push(date.getMonth() + 1);
  dateArr.push(date.getDate());

  return dateArr.join('-');
};
