import React from 'react';

interface ImageBannerProps {
  imageUrl: string;
}
const ImageBanner: React.FC<ImageBannerProps> = ({imageUrl}) => {
  return (
    <div
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
    >
      <img
        src={imageUrl}
        alt='Banner Image'
        style={{maxWidth: '100%', height: 'auto'}}
      />
    </div>
  );
};

export default ImageBanner;
