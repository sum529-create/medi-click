import Banner from '@/components/features/mypage/myReserveDetail/banner/Banner';
import ReserveContents from '@/components/features/mypage/myReserveDetail/reserveContents/ReserveContents';
import hospitalDetail from '@/utils/api/hospitalDetail';
import { getReservationDetail } from '@/utils/api/reservation';
import { getUserProfile } from '@/utils/api/userProfile';
import { createClient } from '@/utils/supabase/supabaseServer';

interface Params {
  params: { id: string };
}
const ReservationDetailPage = async ({ params }: Params) => {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { name } = await getUserProfile(session?.user.id);

  const data = await getReservationDetail(params.id);
  const { dgidIdName } = await hospitalDetail(data.hospital_id);

  return (
    <>
      <Banner reservation={data} />
      <ReserveContents reservation={data} dgidIdName={dgidIdName} name={name} />
    </>
  );
};

export default ReservationDetailPage;
