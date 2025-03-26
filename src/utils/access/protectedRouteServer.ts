import { redirect } from 'next/navigation';
import { createClient } from '../supabase/supabaseServer';

interface Props {
  path: string;
}

export const checkAuthServer = async ({ path }: Props) => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect(path);
  }
};
