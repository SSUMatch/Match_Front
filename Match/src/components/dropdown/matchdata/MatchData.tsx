import React from 'react';
import * as S from './Styles';

interface MatchDataProps {
  expect: string;
}

const MatchData: React.FC<MatchDataProps> = ({expect}) => {
  return (
    <div
      style={{
        paddingTop: '1.6rem',
        background: '#FFFFFF',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      }}
    >
      <S.UnderLineLabelContainer>레벨분포</S.UnderLineLabelContainer>
      <S.LabelContainer>
        예상 평균 레벨은 <S.HighlightLabel>{expect}</S.HighlightLabel> 입니다
      </S.LabelContainer>
      <S.PorgerssContainer>
        <S.PorgerssWrap>
          <S.ProgressBars>
            <S.Progress height='50%' />
          </S.ProgressBars>
          <S.ProgressLabel>40%</S.ProgressLabel>
          <S.TextLabel>루키</S.TextLabel>
        </S.PorgerssWrap>
        <S.PorgerssWrap>
          <S.ProgressBars>
            <S.Progress height='0%' />
          </S.ProgressBars>
          <S.ProgressLabel>0%</S.ProgressLabel>
          <S.TextLabel>비기너</S.TextLabel>
        </S.PorgerssWrap>
        <S.PorgerssWrap>
          <S.ProgressBars>
            <S.Progress height='70%' />
          </S.ProgressBars>
          <S.ProgressLabel>70%</S.ProgressLabel>
          <S.TextLabel>아마추어</S.TextLabel>
        </S.PorgerssWrap>
        <S.PorgerssWrap>
          <S.ProgressBars>
            <S.Progress height='90%' />
          </S.ProgressBars>
          <S.ProgressLabel>90%</S.ProgressLabel>
          <S.TextLabel>세미프로</S.TextLabel>
        </S.PorgerssWrap>
        <S.PorgerssWrap>
          <S.ProgressBars>
            <S.Progress height='60%' />
          </S.ProgressBars>
          <S.ProgressLabel>60%</S.ProgressLabel>
          <S.TextLabel>프로</S.TextLabel>
        </S.PorgerssWrap>
      </S.PorgerssContainer>
    </div>
  );
};

export default MatchData;
