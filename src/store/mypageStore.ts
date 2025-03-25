import { create } from 'zustand';

interface ShowModalState {
  isShowModal: boolean;
  setIsShowModal: (isShowModal: boolean) => void;
  toggleModal: () => void;
}

export const showEditModalStore = create<ShowModalState>((set) => ({
  isShowModal: false,
  setIsShowModal: (isShowModal) => set({ isShowModal }),
  toggleModal: () => set((state) => ({ isShowModal: !state.isShowModal })),
}));
