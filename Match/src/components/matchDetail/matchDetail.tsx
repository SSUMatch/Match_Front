import React, {useState} from 'react';
import * as S from './Styles';
import StarClicked from '@/assets/svg/starClicked.svg?react';
import StarUnclicked from '@/assets/svg/starUnclicked.svg?react';

interface MatchDetailProps {
  date: string;
  placeName: string;
  location: string;
  price: number;
}

const MatchDetail: React.FC<MatchDetailProps> = ({
  date,
  placeName,
  location,
  price,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <S.LabelContainer>
      <S.HeadWrapper>
        <S.HeadLabel>{date}</S.HeadLabel>
        <S.ButtonContainer>
          <S.FavoriteButton onClick={toggleFavorite}>
            {isFavorite ? (
              <StarClicked width={40} height={40} />
            ) : (
              <StarUnclicked width={40} height={40} />
            )}
          </S.FavoriteButton>
        </S.ButtonContainer>
      </S.HeadWrapper>
      <S.HeadLabel>{placeName}</S.HeadLabel>
      <S.SubLabel>{location}</S.SubLabel>
      <S.ApplyWrapper>
        <S.ApplyButton>매치 신청</S.ApplyButton>
      </S.ApplyWrapper>
    </S.LabelContainer>
  );
};

export default MatchDetail;
