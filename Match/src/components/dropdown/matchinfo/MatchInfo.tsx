import * as S from './Styles';
import football from '@/assets/svg/football.svg?react';
import shoes from '@/assets/svg/shoes.svg?react';
import uniform from '@/assets/svg/uniform.svg?react';
import parking from '@/assets/svg/parking.svg?react';
import shower from '@/assets/svg/shower.svg?react';
import bathroom from '@/assets/svg/bathroom.svg?react';
// 아이콘 데이터 배열
const icons = [
  {Component: football, label: '구장 규격 40 x 20'},
  {Component: shoes, label: '풋살화 대여'},
  {Component: uniform, label: '용품 대여'},
  {Component: parking, label: '주차'},
  {Component: shower, label: '샤워 시설'},
  {Component: bathroom, label: '화장실'},
];

// 컴포넌트
const MatchInfo = () => {
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
    </S.TotalContainer>
  );
};

export default MatchInfo;
