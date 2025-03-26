import { create } from 'zustand';

interface OpenFormState {
  isOpenForm: boolean;
  setIsOpenForm: (isOpenForm: boolean) => void;
  toggleForm: () => void;
}

export const useOpenForm = create<OpenFormState>((set) => ({
  isOpenForm: false,
  setIsOpenForm: (isOpenForm) => set({ isOpenForm }),
  toggleForm: () => set((state) => ({ isOpenForm: !state.isOpenForm })),
}));
