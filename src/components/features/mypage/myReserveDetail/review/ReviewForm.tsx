'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Button } from '@/components/ui/button';
import { PATH } from '@/constants/routerPath';
import { ReservationProps } from '@/types/components/mypage/reservation.type';
import { Enums } from '@/types/supabase';
import { createReview } from '@/utils/api/review';
import { useOpenForm } from '@/utils/zustand/useOpenForm';
import ContentsContainer from '../reserveContents/ContentsContainer';
import InfoContainer from '../reserveContents/InfoContainer';
import InfoDetailContainer from '../reserveContents/InfoDetailContainer';
import ReviewItem from './ReviewItem';

interface Attributes {
  id: string;
  label: Enums<'review'>;
}

const ReviewForm = ({ reservation }: ReservationProps) => {
  const router = useRouter();
  const [selectedReview, setSelectedReview] = useState<Enums<'review'> | null>(
    null,
  );
  const { user_id, hospital_id } = reservation;
  const { toggleForm } = useOpenForm();

  const attributes: Attributes[] = [
    { id: 'kindness', label: '친절해요' },
    { id: 'cleanliness', label: '시설이 좋고 청결해요' },
    { id: 'faster', label: '진료 대기가 없어요' },
    { id: 'technical', label: '전문적이에요' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (setSelectedReview === null) {
      toast.error('항목을 선택해주세요.');
      return;
    }
    try {
      const reviewData = {
        user_id,
        hospital_id,
        review: selectedReview as Enums<'review'>,
      };
      await createReview(reviewData);
      toast.success('리뷰가 저장되었습니다.');
      router.push(`${PATH.HOSPITAL}/${hospital_id}`);
      toggleForm();
    } catch (error) {
      toast.error('리뷰 저장에 실패했습니다.');
    }
  };

  return (
    <ContentsContainer>
      <InfoContainer>
        <div className='flex h-[90px] items-center rounded-[13px] bg-main pl-10 text-3xl font-bold text-white'>
          리뷰 작성
        </div>
        <form onSubmit={handleSubmit}>
          <InfoDetailContainer>
            {attributes.map((item) => (
              <ReviewItem
                key={item.id}
                label={item.label}
                onChange={() => setSelectedReview(item.label)}
              />
            ))}
            <div className='absolute right-8 top-48 flex gap-10'>
              <Button className='h-[44px] w-[146px] rounded-[10px] font-bold'>
                리뷰 등록
              </Button>
              <Button
                onClick={() => toggleForm()}
                className='h-[44px] w-[146px] rounded-[10px] bg-sub font-bold text-black01 hover:bg-sub-hover'
              >
                닫기
              </Button>
            </div>
          </InfoDetailContainer>
        </form>
      </InfoContainer>
      <div className='mr-20 mt-7 h-[300px] w-[300px] flex-shrink-0' />
    </ContentsContainer>
  );
};

export default ReviewForm;
