import { createClient } from '../supabase/supabaseServer';

export const checkAuthServer = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    return false;
  }
  return true;
};
