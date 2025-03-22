export const convertToTimeFormat = (timeStr: string) => {
  const hour = timeStr.slice(0, 2);
  const numHour = Number(hour);
  let period;
  if (numHour <= 12 && numHour >= 6) {
    period = '오전';
  } else {
    period = '오후';
  }
  const minute = timeStr.slice(2, 4);
  return `${period} ${hour}:${minute}`;
};
