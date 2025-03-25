'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { Button } from '@/components/ui/button';
import Text from '@/components/ui/Text';
import { Textarea } from '@/components/ui/textarea';
import Title from '@/components/ui/Title';
import { showEditModalStore } from '@/store/mypageStore';
import { ReservationProps } from '@/types/components/mypage/reservation.type';
import { updateReservation } from '@/utils/api/reservation';
import EditFormInput from '../../../editProfile/EditFormInput';
import ModalContainer from './ModalContainer';

const EditReservationModal = ({ reservation }: ReservationProps) => {
  const [date, setDate] = useState(reservation.date);
  const [time, setTime] = useState(reservation.time.slice(0, 5));
  const [memo, setMemo] = useState(reservation.memo);

  const { toggleModal } = showEditModalStore();

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateReservation(reservation.id, time, date, memo);
      toast.success('예약이 변경되었습니다.');
    } catch (error) {
      toast.error('예약 수정에 실패했습니다.');
    }
  };

  return (
    <ModalContainer>
      <Title size='md'>예약 정보 변경</Title>
      <hr className='my-3 border-main' />
      <form className='mt-7 flex flex-col gap-10' onSubmit={handleOnSubmit}>
        <EditFormInput
          label='날짜'
          inputValue={date}
          type='date'
          textSize='md'
          onChange={(e) => setDate(e.target.value)}
        />
        <EditFormInput
          label='시간'
          inputValue={time}
          type='time'
          textSize='md'
          onChange={(e) => setTime(e.target.value)}
        />
        <div className='flex w-full flex-col gap-3'>
          <Text size='md' color='black02' align='left'>
            증상
          </Text>
          <Textarea
            className='h-[100px] w-full rounded-[14px] border-2 border-gray03'
            value={memo ? memo : ''}
            placeholder='증상을 입력해주세요.'
            onChange={(e) => setMemo(e.target.value)}
          />
        </div>
        <div className='flex justify-end gap-5'>
          <Button className='w-[100px]' type='submit'>
            저장
          </Button>
          <Button
            className='w-[100px] bg-sub text-black01 hover:bg-sub-hover'
            type='button'
            onClick={() => toggleModal()}
          >
            취소
          </Button>
        </div>
      </form>
    </ModalContainer>
  );
};

export default EditReservationModal;
