import React, {useState} from 'react';
import {useRecoilValue} from 'recoil';
import axios from 'axios';
import {matchDetailState} from '@/recoil/matchdetail/MatchDetailState.tsx';
import * as S from './Styles';
import StarClicked from '@/assets/svg/starClicked.svg?react';
import StarUnclicked from '@/assets/svg/starUnclicked.svg?react';
import Modal from '@/components/modal/Modal';

const MatchDetail: React.FC = () => {
  const matchDetail = useRecoilValue(matchDetailState);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFavorite = async () => {
    setIsFavorite(!isFavorite);
    try {
      const response = await axios.post(
        `https://kusitms28.store/users/2/favorites?location=${matchDetail.location}&placeName=${matchDetail.placeName}`,
      );
      if (response.data.code === '200' && response.data.isSuccess) {
        console.log('Favorite added with ID:', response.data.data.favoriteId);
      } else {
        console.error('Failed to add favorite:', response.data.message);
      }
    } catch (error) {
      console.error('Error adding favorite:', error);
    }
  };

  const handleApply = () => {
    setIsModalOpen(true);
  };

  return (
    <S.LabelContainer>
      <S.HeadWrapper>
        <S.HeadLabel>{matchDetail.date}</S.HeadLabel>
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
      <S.HeadLabel>{matchDetail.placeName}</S.HeadLabel>
      <S.SubLabel>{matchDetail.location}</S.SubLabel>
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
