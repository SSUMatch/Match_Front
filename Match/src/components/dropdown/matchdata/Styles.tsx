import styled from '@emotion/styled';
import Font from '@/styles/Font';
import Color from '@/styles/Color';

interface ProgressProps {
  height: string; // 높이 값을 string 타입으로 지정
}

export const UnderLineContainer = styled.span`
  width: auto;
  height: 4rem;
  font-weight: ${Font.WEIGHT.MEDIUM};
  font-size: ${Font.SIZE.BODY1};
  color: ${Color.TrueBlack};
  display: block;
  margin-left: 1.75rem;
`;

export const LabelContainer = styled.span`
  width: auto;
  height: 4rem;
  font-weight: ${Font.WEIGHT.MEDIUM};
  font-size: ${Font.SIZE.BODY1};
  color: ${Color.TrueBlack};
  display: block;
  margin-left: 1.75rem;
`;

export const UnderLineLabelContainer = styled(LabelContainer)`
  text-decoration: underline;
`;

export const HighlightLabel = styled.span`
  color: ${Color.Blue};
  font-weight: ${Font.WEIGHT.BOLD};
`;

export const PorgerssContainer = styled.div`
  width: 54rem;
  height: 30rem;
  display: flex;
  flex-direction: row;
`;

export const PorgerssWrap = styled.div`
  width: 54rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center; // 세로 중앙 정렬
  justify-content: center; // 가로 중앙 정렬
`;

export const ProgressBars = styled.div`
  position: relative;
  width: 8rem;
  height: 21rem;
  background-color: ${Color.BarBG};
  border-radius: 2rem;
  margin-left: 1.75rem;
  margin-right: 1.75rem;
`;

export const Progress = styled.div<ProgressProps>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${({height}) => height};
  background-color: ${Color.Bar};
  border-radius: 2rem;
`;

export const ProgressLabel = styled.span`
  font-weight: ${Font.WEIGHT.MEDIUM};
  font-size: ${Font.SIZE.BODY3};
  color: ${Color.TrueBlack};
  margin-top: 1.2rem;
  text-align: center;
  display: block;
  width: 100%;
`;

export const TextLabel = styled.span`
  font-weight: ${Font.WEIGHT.MEDIUM};
  font-size: ${Font.SIZE.BODY3};
  color: ${Color.Gray50};
  margin-top: 1.2rem;
  text-align: center;
  display: block;
  width: 100%;
`;
