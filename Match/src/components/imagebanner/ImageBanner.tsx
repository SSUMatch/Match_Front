// ImageBanner.js
import React from 'react';

interface ImageBannerProps {
  imgUrl: string;
}

const ImageBanner: React.FC<ImageBannerProps> = ({imgUrl}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={imgUrl}
        alt='Banner Image'
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
