export const validatePhoneNumber = (phoneNumber: string): boolean => {
  return /^010-\d{4}-\d{4}$/.test(phoneNumber);
};
