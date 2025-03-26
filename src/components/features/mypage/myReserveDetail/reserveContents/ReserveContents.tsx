import KakaoStaticMap from '@/components/common/KakaoStaticMap';
import { Button } from '@/components/ui/button';
import { ReservationProps } from '@/types/components/mypage/reservation.type';
import { isPastDateTime } from '@/utils/func/isPastDateTime';
import ContentsContainer from './ContentsContainer';
import InfoContainer from './InfoContainer';
import InfoDetailContainer from './InfoDetailContainer';
import InfoDetailContents from './InfoDetailContents';
import InfoTitleBox from './InfoTitleBox';

const ReserveContents = ({
  reservation,
  dgidIdName,
  name,
}: ReservationProps & { dgidIdName: string; name: string }) => {
  const { hospital_id, date, time, status, hospitals } = reservation;
  const showButton = isPastDateTime(date, time);

  return (
    <ContentsContainer>
      <InfoContainer>
        <InfoTitleBox />
        <InfoDetailContainer>
          <InfoDetailContents title='예약자' text={`${name}님`} />
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
      <div className='mr-20 mt-7 h-[300px] w-[300px] flex-shrink-0 overflow-hidden border-2'>
        <KakaoStaticMap params={{ id: hospital_id, name: hospitals.name }} />
      </div>
    </ContentsContainer>
  );
};

export default ReserveContents;
