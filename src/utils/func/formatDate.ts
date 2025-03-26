/**
 * 날짜를 'yyyy년 m월 d일 (요일)' 형식으로 변환합니다.
 *
 * @param {Date} date - 변환할 Date 객체.
 * @returns {string} 'yyyy년 m월 d일 (요일)' 형식으로 변환된 날짜 문자열.
 */
export const formatDate = (date: Date) => {
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'short',
  });
};

/**
 * 날짜를 'm월 d일' 형식으로 변환합니다.
 *
 * @param {Date} date - 변환할 Date 객체.
 * @returns {string} 'm월 d일' 형식으로 변환된 날짜 문자열.
 */
export const formatShortDate = (date: Date) => {
  return date.toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric',
  });
};

/**
 * 주어진 날짜의 하루 전 날짜를 반환합니다.
 *
 * @param {Date} currentDate - 기준 날짜.
 * @returns {Date} 하루 전 날짜.
 */
export const getPreviousDay = (currentDate: Date) => {
  const prevDate = new Date(currentDate);
  prevDate.setDate(prevDate.getDate() - 1);
  return prevDate;
};

/**
 * 주어진 날짜의 하루 후 날짜를 반환합니다.
 *
 * @param {Date} currentDate - 기준 날짜.
 * @returns {Date} 하루 후 날짜.
 */
export const getNextDay = (currentDate: Date) => {
  const nextDate = new Date(currentDate);
  nextDate.setDate(nextDate.getDate() + 1);
  return nextDate;
};

/**
 * 주어진 날짜를 yyyy-mm-dd 형식으로 변환하는 함수입니다.
 *
 * @param {Date} date - 변환할 Date 객체.
 * @returns {string} yyyy-mm-dd 형식으로 변환된 날짜 문자열.
 */
export const formatToDateString = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};
