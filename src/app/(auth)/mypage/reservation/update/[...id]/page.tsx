import MyPageContentsContainer from '@/components/features/mypage/layout/MyPageContentsContainer';
import MainContentsContainer from '@/components/features/mypage/MainContentsContainer';
import MainContentsTitleBox from '@/components/features/mypage/MainContentsTitleBox';
import Banner from '@/components/features/mypage/myReserveDetail/banner/Banner';
import UpdateReservationForm from '@/components/features/mypage/myReserveDetail/updateReservation/UpdateForm';
import { getReservationDetail } from '@/utils/api/reservation';
interface Params {
  params: { id: string };
}

const UpdateReservationPage = async ({ params }: Params) => {
  const data = await getReservationDetail(params.id);

  return (
    <>
      <Banner reservation={data} />
      <MyPageContentsContainer>
        <MainContentsContainer>
          <MainContentsTitleBox title='예약 변경하기' />
          <UpdateReservationForm init={data} />
        </MainContentsContainer>
      </MyPageContentsContainer>
    </>
  );
};

export default UpdateReservationPage;
