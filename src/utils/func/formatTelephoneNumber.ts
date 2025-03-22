/**
 * formatTelephoneNumber
 * 정규식을 이용하여 02-XXX-XXXX 형태로 포맷하는 유틸 함수
 *
 * @param tel string
 * @returns
 */
const formatTelephoneNumber = (tel: string) => {
  return tel.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, '$1-$2-$3');
};

export default formatTelephoneNumber;
