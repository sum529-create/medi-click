import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AccountStore {
  isHospitalAccount: boolean;
  setIsHospitalAccount: (account: boolean) => void;
}
export const useAccountStore = create<AccountStore>()(
  persist(
    (set) => ({
      isHospitalAccount: false,
      setIsHospitalAccount: (account) => {
        set({ isHospitalAccount: account });
      },
    }),
    { name: 'account-storage' },
  ),
);
