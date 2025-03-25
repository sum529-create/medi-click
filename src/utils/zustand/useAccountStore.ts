import { create } from 'zustand';

interface AccountStore {
  isHospitalAccount: boolean;
  setIsHospitalAccount: (account: boolean) => void;
}
export const useAccountStore = create<AccountStore>((set) => ({
  isHospitalAccount: false,
  setIsHospitalAccount: (account) => {
    set({ isHospitalAccount: account });
  },
}));
