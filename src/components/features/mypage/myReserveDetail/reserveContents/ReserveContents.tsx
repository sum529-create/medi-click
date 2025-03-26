import KakaoStaticMap from '@/components/common/KakaoStaticMap';
import { Button } from '@/components/ui/button';
import { ReservationProps } from '@/types/components/mypage/reservation.type';
import { isPastDateTime } from '@/utils/func/isPastDateTime';
import ContentsContainer from './ContentsContainer';
import InfoContainer from './InfoContainer';
import InfoDetailContainer from './InfoDetailContainer';
import InfoDetailContents from './InfoDetailContents';
import InfoTitleBox from './InfoTitleBox';

const ReserveContents = ({ reservation, a }: ReservationProps & { a: any }) => {
  const { hospital_id, date, time, status, hospitals } = reservation;
  const showButton = isPastDateTime(date, time);
  console.log('detail', a);
  return (
    <ContentsContainer>
      <InfoContainer>
        <InfoTitleBox />
        <InfoDetailContainer>
          {/* 유저정보에서 받아올 이름 */}
          <InfoDetailContents title='예약자' text='김수임님' />
          <InfoDetailContents title='진료과' text={a.dgidIdName} />
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
      <div className='mr-20 mt-7 h-[300px] w-[300px] flex-shrink-0 overflow-hidden border-2'>
        <KakaoStaticMap params={{ id: hospital_id, name: hospitals.name }} />
      </div>
    </ContentsContainer>
  );
};

export default ReserveContents;
