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
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={imgUrl}
        alt='Banner Image'
        style={{
          width: '100%',
          height: '38rem',
          borderRadius: '2rem',
        }}
      />
    </div>
  );
};

export default ImageBanner;
