import { createClient } from '@/utils/supabase/supabaseServer';
import SideBarClient from './SideBar.client';

const SideBar = async () => {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return <SideBarClient userId={session?.user.id} />;
};

export default SideBar;
