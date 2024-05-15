import styled from '@emotion/styled';
import Color from '../../styles/Color';

export const Content = styled.div`
  width: 1280px;
  flex: 1;
  min-height: 80vh; /* 최소 높이 설정 */
  display: flex;
  flex-direction: column;
  background-color: ${Color.BGgray};
  align-items: center;
  margin: 0;
  position: relative;
  //relative 속성확인
`;
