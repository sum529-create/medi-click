/**
 * localStorage로부터 데이터를 받아오는 함수
 *
 * @returns localStorage 데이터 객체
 */

export const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem('reservationForm') || '{}');
};

export const updateLocalStorage = () => {};
