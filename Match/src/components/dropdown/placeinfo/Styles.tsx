import styled from '@emotion/styled';
import Font from '@/styles/Font';
import Color from '@/styles/Color';

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  text-align: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 16rem;
  grid-row-gap: 8rem;
  justify-items: center;
  align-items: center;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const IconImage = styled.div`
  width: 8rem;
  height: 8rem;
  margin-bottom: 2rem; // 이미지와 텍스트 사이 간격
  & > svg {
    width: 100%;
    height: 100%;
  }
`;

export const IconLabel = styled.span`
  font-weight: ${Font.WEIGHT.MEDIUM};
  font-size: ${Font.SIZE.BODY1};
  color: ${Color.TrueBlack};
`;

export const LabelWrapper = styled.div`
  font-weight: ${Font.WEIGHT.MEDIUM};
  font-size: ${Font.SIZE.BODY1};
  color: ${Color.TrueBlack};
`;
