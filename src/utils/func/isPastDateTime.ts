/**
 * date와 time을 받아 현재 시점에서 그 시점이 지났는지에 따라 참, 거짓을 반환하는 함수입니다.
 *
 * @param { string } date: 예약 정보에 담긴 date 문자열
 * @param { string } time: 예약 정보에 담긴 time 문자열
 * @returns { boolean }: 예약일이 지나면 true, 아직이면 false 반환
 */
export const isPastDateTime = (date: string, time: string): boolean => {
  const targetDate = new Date(`${date}T${time}`);
  const now = new Date();

  return now > targetDate;
};
