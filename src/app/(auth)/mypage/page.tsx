import MyCalendar from '@/components/features/mypage/myReserveCalendar/myCalendar/MyCalendar';
import { PATH } from '@/constants/routerPath';
import { checkAuthServer } from '@/utils/access/protectedRouteServer';

const MyPage = async () => {
  await checkAuthServer({ path: PATH.LOGIN });

  return (
    <>
      <MyCalendar />
      {/* <ScheduleBox /> */}
    </>
  );
};

export default MyPage;
