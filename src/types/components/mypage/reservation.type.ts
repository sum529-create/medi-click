import { Tables } from '@/types/supabase';

export type Reservation = Tables<'reservations'> & {
  hospitals: Tables<'hospitals'>;
};

export interface ReservationProps {
  reservation: Reservation;
}
