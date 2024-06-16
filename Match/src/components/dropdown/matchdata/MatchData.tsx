import React from 'react';
import {useRecoilValue} from 'recoil';
import {matchDataState} from '@/recoil/matchdetail/MatchDetailState.tsx';
import * as S from './Styles';

const MatchData: React.FC = () => {
  const matchData = useRecoilValue(matchDataState);

  return (
    <S.TotalContainer>
      <S.UnderLineLabelContainer>레벨분포</S.UnderLineLabelContainer>
      <S.LabelContainer>
        예상 평균 레벨은 <S.HighlightLabel>{matchData.expect}</S.HighlightLabel>{' '}
        입니다
      </S.LabelContainer>
      <S.PorgerssContainer>
        {matchData.levels.map((level, index) => (
          <S.PorgerssWrap key={index}>
            <S.ProgressBars>
              <S.Progress height={level.percent} />
            </S.ProgressBars>
            <S.ProgressLabel>{level.percent}</S.ProgressLabel>
            <S.TextLabel>{level.level}</S.TextLabel>
          </S.PorgerssWrap>
        ))}
      </S.PorgerssContainer>
    </S.TotalContainer>
  );
};

export default MatchData;
