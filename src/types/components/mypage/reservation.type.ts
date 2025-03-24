import { Database } from '@/types/supabase';

export type Reservation =
  Database['public']['Tables']['reservations']['Row'] & {
    hospitals: Database['public']['Tables']['hospitals']['Row'];
  };

export interface ReservationProps {
  reservation: Reservation;
}
