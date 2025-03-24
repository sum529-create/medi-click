const RESERVATION_FORM = 'reservationForm';

/**
 * localStorage로부터 데이터를 받아오는 함수
 *
 * @returns localStorage 데이터 객체
 */

export const getLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem('reservationForm') || '{}');
  } catch {
    return {};
  }
};

/**
 * localStorage에 데이터를 업데이트하는 함수
 *
 * @param key - 저장할 key 값
 * @param value - 저장할 value 값
 */

export const updateLocalStorage = (key: string, value: string) => {
  try {
    const storageData = getLocalStorage();
    const updatedData = {
      ...storageData,
      [key]: value,
    };
    localStorage.setItem(RESERVATION_FORM, JSON.stringify(updatedData));
  } catch (error) {
    console.error('로컬스토리지 데이터 업데이트에 실패하였습니다.', error);
  }
};
