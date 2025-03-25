import { Button } from '@/components/ui/button';
import { ReservationProps } from '@/types/components/mypage/reservation.type';
import hospitalDetail from '@/utils/api/hospitalDetail';
import { isPastDateTime } from '@/utils/func/isPastDateTime';
import ContentsContainer from './ContentsContainer';
import InfoContainer from './InfoContainer';
import InfoDetailContainer from './InfoDetailContainer';
import InfoDetailContents from './InfoDetailContents';
import InfoMap from './InfoMap';
import InfoTitleBox from './InfoTitleBox';

const ReserveContents = async ({ reservation }: ReservationProps) => {
  const { hospital_id, date, time, status } = reservation;
  const { dgidIdName } = await hospitalDetail(hospital_id);
  const showButton = isPastDateTime(date, time);

  return (
    <ContentsContainer>
      <InfoContainer>
        <InfoTitleBox />
        <InfoDetailContainer>
          {/* 유저정보에서 받아올 이름 */}
          <InfoDetailContents title='예약자' text='김수임님' />
          <InfoDetailContents title='진료과' text={dgidIdName} />
          <InfoDetailContents title='증상' text={reservation.memo} />
          {showButton && status === 'ok' ? (
            <Button className='absolute right-8 top-48 h-[44px] w-[146px] rounded-[10px] font-bold'>
              리뷰 작성
            </Button>
          ) : (
            <></>
          )}
        </InfoDetailContainer>
      </InfoContainer>
      <InfoMap />
    </ContentsContainer>
  );
};

export default ReserveContents;
