import React from 'react';
import HospitalBasicInfo from '@/components/features/hospitalDetail/HospitalBasicInfo';
import InfoSection from '@/components/features/hospitalDetail/InfoSection';
import ReviewSection from '@/components/features/hospitalDetail/ReviewSection';

const hospitalDetailPage = () => {
  return (
    <div className='relative my-20 flex h-[100vh-80px] items-end'>
      <div className='mx-auto my-0 flex max-w-screen-xl flex-1 flex-col justify-center'>
        <HospitalBasicInfo />
        <InfoSection title='진료 정보'>
          <p>
            <b>진료 시간</b>: 오전 07:55 ~ 오후 06:00
          </p>
          <p>
            <b>점심 시간</b>: 오후 12:00 ~ 오후 01:00
          </p>
          <p>
            <span className='text-red'>휴무</span>: 일요일
          </p>
        </InfoSection>
        <InfoSection title='병원 정보'>
          <p>아토피, 천식 등의 소아 전문 치료</p>
        </InfoSection>
        <ReviewSection />
      </div>
    </div>
  );
};

export default hospitalDetailPage;
