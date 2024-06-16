// import {useRecoilValue} from 'recoil';
// import {placeInfoState} from '@/recoil/matchdetail/MatchDetailState.tsx';
import * as S from './Styles';
import shoot from '@/assets/svg/shoot.svg?react';
import sixpeople from '@/assets/svg/sixpeople.svg?react';
import rankstar from '@/assets/svg/rankstar.svg?react';
import twelve from '@/assets/svg/twelve.svg?react';

// 아이콘 데이터 배열
const icons = [
  {Component: shoot, label: '남자 매치', key: 'gender'},
  {Component: sixpeople, label: '6대6 매치', key: 'size'},
  {Component: rankstar, label: '랭크 매치', key: 'type'},
  {Component: twelve, label: '인원', key: 'num'},
];

const PlaceInfo = () => {
  // const placeInfo = useRecoilValue(placeInfoState);

  return (
    <S.TotalContainer>
      <S.GridContainer>
        {icons.map((icon, index) => (
          <S.IconItem key={index}>
            <S.IconImage>
              <icon.Component />
            </S.IconImage>
            <S.IconLabel>{icon.label}</S.IconLabel>
          </S.IconItem>
        ))}
      </S.GridContainer>
      <S.LabelWrapper>
        <S.HighlightLabel>호날두</S.HighlightLabel> 매니저
      </S.LabelWrapper>
    </S.TotalContainer>
  );
};

export default PlaceInfo;
