import React, {useState} from 'react';
import * as S from './Styles';
import StarClicked from '@/assets/svg/starClicked.svg?react';
import StarUnclicked from '@/assets/svg/starUnclicked.svg?react';
import Modal from '@/components/modal/Modal';

interface MatchDetailProps {
  date: string;
  placeName: string;
  location: string;
  // price: number;
}

const MatchDetail: React.FC<MatchDetailProps> = ({
  date,
  placeName,
  location,
  // price,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const handleApply = () => {
    setIsModalOpen(true);
  };
  return (
    <S.LabelContainer>
      <S.HeadWrapper>
        <S.HeadLabel>{date}</S.HeadLabel>
        <S.ButtonContainer>
          <S.FavoriteButton onClick={toggleFavorite}>
            {isFavorite ? (
              <StarClicked width={56} height={56} />
            ) : (
              <StarUnclicked width={56} height={56} />
            )}
          </S.FavoriteButton>
        </S.ButtonContainer>
      </S.HeadWrapper>
      <S.HeadLabel>{placeName}</S.HeadLabel>
      <S.SubLabel>{location}</S.SubLabel>
      <S.ApplyWrapper>
        <S.ApplyButton onClick={handleApply}>매치 신청</S.ApplyButton>
      </S.ApplyWrapper>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message='매치 신청이 완료되었습니다.'
      />
    </S.LabelContainer>
  );
};

export default MatchDetail;
