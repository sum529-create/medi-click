import { TABLE } from '@/constants/supabaseTables';
import { Tables } from '@/types/supabase';
import { supabase } from '../supabase/supabaseClient';

export interface Review {
  review: Tables<'reviews'>;
}

export const createReview = async (
  review: Omit<Review['review'], 'id' | 'created_at'>,
): Promise<Review['review']> => {
  const { data, error } = await supabase
    .from(TABLE.REVIEWS)
    .insert(review)
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to create review: ${error.message}`);
  }

  return data as Review['review'];
};
