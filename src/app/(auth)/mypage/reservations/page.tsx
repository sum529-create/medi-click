import { createClient } from '@/utils/supabase/supabaseServer';
import ReserveListClientPage from './page.client';

const ReserveListPage = async () => {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <ReserveListClientPage userId={session?.user.id} />;
};

export default ReserveListPage;
