import MainContentsContainer from '@/components/features/mypage/MainContentsContainer';
import MainContentsTitleBox from '@/components/features/mypage/MainContentsTitleBox';
import ReservationList from '@/components/features/mypage/myReservations/ReservationList';

import { createClient } from '@/utils/supabase/supabaseServer';

const ReserveListPage = async () => {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <MainContentsContainer>
      <MainContentsTitleBox title='내 예약 목록' />
      <ReservationList userId={session?.user.id} />
    </MainContentsContainer>
  );
};

export default ReserveListPage;
