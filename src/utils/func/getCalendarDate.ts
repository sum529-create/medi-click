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

// 00:00 문자열을 오전/오후 00시 00분으로 변환해주는 함수
// 나중에 시간 선택 페이지를 수정하면서 이 함수는 삭제할 예정입니다.

export const getReservationTime = (time: string) => {
  const [h, m] = time.split(':');
  const hour = Number(h);
  const minute = m.padStart(2, '0');

  if (hour === 0) {
    return `오전 12시 ${minute}분`;
  }

  if (1 <= hour && hour <= 11) {
    return `오전 ${hour}시 ${minute}분`;
  }

  if (hour === 12) {
    return `오후 12시 ${minute}분`;
  }

  if (12 <= hour && hour <= 23) {
    return `오후 ${hour - 12}시 ${minute}분`;
  }
};

export const generateTimeSlots = (obj: { open: string; close: string }) => {
  const open = obj.open.padStart(4, '0');
  const close = obj.close.padStart(4, '0');

  let totalMinutes = Number(open.slice(0, 2)) * 60 + Number(open.slice(2, 4));
  const closeMinutes =
    Number(close.slice(0, 2)) * 60 + Number(close.slice(3, 5));

  const morning = [];
  const afternoon = [];

  while (totalMinutes <= closeMinutes) {
    if (totalMinutes >= 750 && totalMinutes < 840) {
      totalMinutes += 30;
      continue;
    }

    const str =
      Math.floor(totalMinutes / 60) +
      ':' +
      `${totalMinutes % 60}`.padStart(2, '0');

    if (totalMinutes < 750) {
      morning.push(str);
    } else {
      afternoon.push(str);
    }
    totalMinutes += 30;
  }

  return { morning, afternoon };
};
