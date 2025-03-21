import React from 'react';
import { Button } from '../../ui/button';

const HospitalBasicInfo = () => {
  const hospitalDetails = [
    { label: '주소', value: '서울특별시 서대문구 통이로 413 연세스포트센터' },
    { label: '전화번호', value: '02-344-2342' },
  ];
  const textStyles = {
    subInfo: 'text-xl text-black02',
    title: 'text-3xl font-bold',
    button: 'max-w-[136px] mt-auto',
  };
  return (
    <div className='mb-[100px] flex flex-row justify-between gap-12'>
      <div className='flex flex-col gap-6'>
        <p className={textStyles.subInfo}>소아청소년과</p>
        <h3 className={textStyles.title}>오지현소아청소년과의원</h3>
        <p className={textStyles.title}>
          주소: 서울특별시 서대문구 통이로 413 연세스포트센터
        </p>
        {hospitalDetails.map((info) => (
          <p key={info.label} className={textStyles.subInfo}>
            {info.label}: {info.value}
          </p>
        ))}
        <Button size='lg' className={textStyles.button}>
          예약하러가기 &gt;
        </Button>
      </div>
      <div className='h-[350px] w-[350px] bg-black'>kakao map</div>
    </div>
  );
};

export default HospitalBasicInfo;
