import styled from '@emotion/styled';
import Font from '@/styles/Font';
import Color from '@/styles/Color';

// 스타일드 컴포넌트 정의
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  justify-items: center;
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
  margin-bottom: 0.8rem; // 이미지와 텍스트 사이 간격
  & > svg {
    width: 100%;
    height: 100%;
  }
`;

export const IconLabel = styled.span`
  font-weight: ${Font.WEIGHT.MEDIUM};
  font-size: ${Font.SIZE.BODY3};
  color: ${Color.Gray70};
`;
