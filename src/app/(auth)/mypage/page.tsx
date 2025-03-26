import { redirect } from 'next/navigation';
import MyCalendar from '@/components/features/mypage/myReserveCalendar/myCalendar/MyCalendar';
import { PATH } from '@/constants/routerPath';
import { checkAuthServer } from '@/utils/access/protectedRouteServer';

const MyPage = async () => {
  const isCheckAuth = await checkAuthServer();
  if (!isCheckAuth) {
    redirect(PATH.LOGIN);
  }

  return (
    <>
      <MyCalendar />
      {/* <ScheduleBox /> */}
    </>
  );
};

export default MyPage;
