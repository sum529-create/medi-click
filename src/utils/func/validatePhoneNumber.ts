interface ReturnValue {
  formatCheck: boolean;
  changeCheck: boolean;
  errorMessage: string | null;
}

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
