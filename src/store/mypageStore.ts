import { create } from 'zustand';
import { ReservationProps } from '@/types/components/mypage/reservation.type';

interface ReservationState {
  reservation: Partial<ReservationProps['reservation']>;
  setReservation: (reservation: ReservationProps['reservation']) => void; // 전체 예약 설정
  clearReservation: () => void; // 상태 초기화
}

export const reservationStore = create<ReservationState>((set) => ({
  reservation: {}, // 초기값을 null로 설정 (빈 상태)
  setReservation: (reservation: ReservationProps['reservation']) =>
    set({ reservation }), // reservation 객체 전체 업데이트
  clearReservation: () => set({ reservation: {} }), // 초기화
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
