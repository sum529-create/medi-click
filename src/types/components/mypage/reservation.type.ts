import { Tables } from '@/types/supabase';

export interface ReservationProps {
  reservation: Tables<'reservations'> & {
    hospitals: Tables<'hospitals'>;
  };
}
