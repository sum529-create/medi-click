const LUNCH_START = 750;
const LUNCH_END = 840;

/**
 * 점심시간인지 판별해주는 함수
 * 750 - 12:30 / 840 - 14:00
 *
 * @param time 현재 총시간
 * @returns 불리언 값
 */

const isLunchTime = (time: number) => {
  return LUNCH_START <= time && time < LUNCH_END;
};

/**
 * 시간을 총시간(분)으로 변환해주는 함수
 * ex) 0130 -> 90
 *
 * @param time 시간
 * @returns 총시간(분)
 */

const changeTimeToMinutes = (time: string) => {
  return Number(time.slice(0, 2)) * 60 + Number(time.slice(2, 4));
};

/**
 * 총시간을 00:00 형태로 변환해주는 함수
 *
 * @param minutes 총시간
 * @returns 00:00 형태로 변환된 문자열
 */

const changeMinutesToString = (minutes: number) => {
  const hour = Math.floor(minutes / 60)
    .toString()
    .padStart(2, '0');
  const minute = (minutes % 60).toString().padStart(2, '0');
  return `${hour}:${minute}`;
};

/**
 * 영업시간을 30분 단위로 끊어서 배열을 만들어주는 함수
 * ex) {open: 800, close: 1000} -> [8:00, 8:30, 9:00, 9:30]
 *
 * @param obj - open시간과 close시간이 string으로 담겨있는 객체
 * @returns 영업시간을 30분 단위로 시간을 끊어 나열한 배열
 */

export const generateTimeSlots = (obj: { open: string; close: string }) => {
  const open = obj.open.padStart(4, '0');
  const close = obj.close.padStart(4, '0');

  let totalMinutes = changeTimeToMinutes(open);
  const closeMinutes = changeTimeToMinutes(close);

  const morning = [];
  const afternoon = [];

  while (totalMinutes <= closeMinutes) {
    if (isLunchTime(totalMinutes)) {
      totalMinutes += 30;
      continue;
    }

    const str = changeMinutesToString(totalMinutes);

    // 점심시간 이전이면 오전, 이후면 오후
    if (totalMinutes < LUNCH_START) {
      morning.push(str);
    } else {
      afternoon.push(str);
    }

    totalMinutes += 30;
  }

  return { morning, afternoon };
};
