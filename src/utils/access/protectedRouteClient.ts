import { supabase } from '../supabase/supabaseClient';

export const checkAuthClient = async () => {
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    return false;
  }
  return true;
};
