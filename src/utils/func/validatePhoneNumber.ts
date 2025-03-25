interface ReturnValue {
  formatCheck: boolean;
  changeCheck: boolean;
  errorMessage: string | null;
}

/**
 * 기등록 된 연락처와 변경할 연락처를 받아서 유효성 검사를 진행하여 적절한 errorMessage를 반환하는 함수입니다.
 * formatCheck를 우선적으로 실행하여 두 값이 모두 거짓일 때는 형식에 관한 errorMessage 반환합니다.
 * 그 외 상황에 따른 errorMessage를 반환하며, 검사가 통과됐을 때에는 errorMessage를 null 값으로 반환합니다.
 *
 * @param { string } nowPhoneNumber: 현재 등록된 연락처
 * @param { string }  updatedPhoneNumber: 수정할 새로운 연락처
 * @returns { ReturnValue } { formatCheck, changeCheck, errorMessage }: format, change 확인 결과(boolean), 유효성 검사에 따른 에러메세지(string)
 */
export const validatePhoneNumber = (
  nowPhoneNumber: string,
  updatedPhoneNumber: string,
): ReturnValue => {
  const formatCheck: boolean = /^010-\d{4}-\d{4}$/.test(updatedPhoneNumber);
  const changeCheck: boolean = nowPhoneNumber !== updatedPhoneNumber;
  let errorMessage: string | null = null;

  if (changeCheck && formatCheck) {
    errorMessage = null;
  }

  if (!formatCheck) {
    errorMessage = '010-XXXX-XXXX 형식으로 입력해주세요.';
  }

  if (!formatCheck && !changeCheck) {
    errorMessage = '010-XXXX-XXXX 형식으로 입력해주세요.';
  }

  if (formatCheck && !changeCheck) {
    errorMessage = '현재 연락처와 일치합니다.';
  }

  if (!changeCheck) {
    errorMessage = '현재 연락처와 일치합니다.';
  }

  return { formatCheck, changeCheck, errorMessage };
};
