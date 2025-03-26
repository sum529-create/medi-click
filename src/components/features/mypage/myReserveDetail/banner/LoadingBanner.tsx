import React from 'react';
import Title from '@/components/ui/Title';
import BannerContainer from './BannerContainer';

const LoadingBanner = () => {
  return (
    <BannerContainer>
      <div className='my-auto'>
        <Title tag='h1' size='lg' align='center' color='deep-blue'>
          로딩 중
        </Title>
      </div>
    </BannerContainer>
  );
};

export default LoadingBanner;
