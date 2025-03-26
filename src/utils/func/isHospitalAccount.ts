// 병원 계정은 hospital@로 시작하거나 @hospital.com으로 끝나는 이메일 사용
export function isHospitalAccount(email: string) {
  if (!email) return false;
  return email.startsWith('hospital@') || email.endsWith('@hospital.com');
}
