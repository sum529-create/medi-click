import { create } from 'zustand';
import { ReservationProps } from '@/types/components/mypage/reservation.type';

interface ReservationState {
  reservation: ReservationProps['reservation'] | null;
  setReservation: (reservation: ReservationProps['reservation']) => void;
  updateField: <K extends keyof ReservationProps['reservation']>(
    field: K,
    value: ReservationProps['reservation'][K],
  ) => void;
  clearReservation: () => void;
}

export const reservationStore = create<ReservationState>((set) => ({
  reservation: null,
  setReservation: (reservation) => set({ reservation }),
  updateField: (field, value) =>
    set((state) => ({
      reservation: state.reservation
        ? { ...state.reservation, [field]: value }
        : null,
    })),
  clearReservation: () => set({ reservation: null }),
}));

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
