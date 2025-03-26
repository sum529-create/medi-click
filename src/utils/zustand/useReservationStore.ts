import { create } from 'zustand';
import { ReservationProps } from '@/types/components/mypage/reservation.type';

interface ReservationState {
  initReservation: ReservationProps['reservation'] | null;
  setReservation: (reservation: ReservationProps['reservation']) => void;
  updateField: <K extends keyof ReservationProps['reservation']>(
    field: K,
    value: ReservationProps['reservation'][K],
  ) => void;
}

export const reservationStore = create<ReservationState>((set) => ({
  initReservation: null,
  setReservation: (initReservation) => set({ initReservation }),
  updateField: (field, value) =>
    set((state) => ({
      initReservation: state.initReservation
        ? { ...state.initReservation, [field]: value }
        : null,
    })),
}));

export default reservationStore;
