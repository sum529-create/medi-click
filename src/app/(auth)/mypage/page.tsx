import { redirect } from 'next/navigation';
import { PATH } from '@/constants/routerPath';
import { checkAuthServer } from '@/utils/access/protectedRouteServer';
import { createClient } from '@/utils/supabase/supabaseServer';
import ReserveListClientPage from './page.client';

const ReserveListPage = async () => {
  const isCheckAuth = await checkAuthServer();
  if (!isCheckAuth) {
    redirect(PATH.HOME);
  }
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <ReserveListClientPage userId={session?.user.id} />;
};

export default ReserveListPage;
