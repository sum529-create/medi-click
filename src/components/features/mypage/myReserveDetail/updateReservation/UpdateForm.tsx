'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Button } from '@/components/ui/button';
import Text from '@/components/ui/Text';
import { Textarea } from '@/components/ui/textarea';
import { PATH } from '@/constants/routerPath';
import { ReservationProps } from '@/types/components/mypage/reservation.type';
import { updateReservation } from '@/utils/api/reservation';
import reservationStore from '@/utils/zustand/useReservationStore';
import EditFormInput from '../../editProfile/EditFormInput';

const UpdateReservationForm = ({
  init,
}: {
  init: ReservationProps['reservation'];
}) => {
  const { updateField } = reservationStore();
  const router = useRouter();

  const { date: initDate, time: initTime, memo: initMemo, id } = init;

  const [date, setDate] = useState<string>(initDate);
  const [time, setTime] = useState<string>(initTime);
  const [memo, setMemo] = useState<string>(initMemo ? initMemo : '');

  const handleOnsubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await updateReservation(id, time, date, memo);
    updateField('date', date);
    updateField('time', time);
    updateField('memo', memo || null);
    toast.success('예약이 변경되었습니다.');
    router.push(`${PATH.RESERVATION}/${id}`);
  };
  return (
    <form
      className='flex flex-col gap-20 px-20 py-10 font-bold'
      onSubmit={handleOnsubmit}
    >
      <EditFormInput
        label='날짜'
        inputValue={date}
        textSize='2xl'
        type='date'
        onChange={(e) => setDate(e.target.value)}
      />
      <EditFormInput
        label='시간'
        inputValue={time}
        textSize='2xl'
        type='time'
        onChange={(e) => setTime(e.target.value)}
      />
      <div>
        <Text size='2xl' color='black02' align='left'>
          증상
        </Text>
        <Textarea
          className='mt-3 h-[200px] w-full rounded-[14px] border-2 border-gray03'
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
        />
        <div className='mt-10 flex justify-center'>
          <Button
            type='submit'
            className='h-[44px] w-[146px] rounded-[10px] text-lg'
          >
            예약 수정하기
          </Button>
        </div>
      </div>
    </form>
  );
};

export default UpdateReservationForm;
