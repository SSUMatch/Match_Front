import React from 'react';
import BannerImage from '@/assets/svg/bannerImage.svg?react';

const ImageBanner: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BannerImage
        style={{
          maxWidth: '100%',
          height: '38rem',
          borderRadius: '2rem',
        }}
      />
    </div>
  );
};
export default ImageBanner;
