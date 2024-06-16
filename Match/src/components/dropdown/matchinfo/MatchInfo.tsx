// import React from 'react';
// import {useRecoilValue} from 'recoil';
// import {matchInfoState} from '@/recoil/match/matchState';
import * as S from './Styles';
import football from '@/assets/svg/football.svg?react';
import shoes from '@/assets/svg/shoes.svg?react';
import uniform from '@/assets/svg/uniform.svg?react';
import parking from '@/assets/svg/parking.svg?react';
import shower from '@/assets/svg/shower.svg?react';
import bathroom from '@/assets/svg/bathroom.svg?react';

// 아이콘 데이터 배열
const icons = [
  {Component: football, label: '구장 규격 40 x 20', key: 'size'},
  {Component: shoes, label: '풋살화 대여', key: 'shoes'},
  {Component: uniform, label: '용품 대여', key: 'borrow'},
  {Component: parking, label: '주차', key: 'parking'},
  {Component: shower, label: '샤워 시설', key: 'shower'},
  {Component: bathroom, label: '화장실', key: 'toilet'},
];

const MatchInfo = () => {
  // const matchInfo = useRecoilValue(matchInfoState);

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
