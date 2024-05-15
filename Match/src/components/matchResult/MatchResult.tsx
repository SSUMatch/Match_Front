import React from 'react';
import * as S from './Styles';
import Redshirt from '@/assets/svg/redshirt.svg?react';
import Down from '@/assets/svg/resultdown.svg?react';

interface MatchResultProps {
  date: string;
  place: string;
  details: string;
  result: string;
  points: number;
}

const MatchResult: React.FC<MatchResultProps> = ({
  date,
  place,
  details,
  result,
  points,
}) => {
  return (
    <S.MatchResultContainer>
      <S.DateWrapper>{date}</S.DateWrapper>
      <S.MainInfoWrapper>
        <S.Title>{place}</S.Title>
        <S.SubTitle>{details}</S.SubTitle>
      </S.MainInfoWrapper>
      <S.ResultWrapper>
        <S.Result>{result}</S.Result>
        <S.Points>+ {points}P</S.Points>
        <S.Icon>
          <Redshirt />
        </S.Icon>
      </S.ResultWrapper>
      <S.ExpandIcon>
        <Down />
      </S.ExpandIcon>
    </S.MatchResultContainer>
  );
};

export default MatchResult;
