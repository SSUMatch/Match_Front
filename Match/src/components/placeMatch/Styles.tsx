import styled from '@emotion/styled';
import Font from '../../styles/Font.ts';
import Color from '../../styles/Color.ts';

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-height: 112rem; /* 최대 높이 설정 */
  overflow-y: auto; /* 세로 스크롤바 추가 */
`;

export const MatchItem = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid ${Color.Gray20};
`;

export const DateLabel = styled.div`
  font-size: ${Font.SIZE.TITLE1};
  font-weight: ${Font.WEIGHT.SEMIBOLD};
  color: ${Color.TrueBlack};
  margin-bottom: 1rem;
  margin-top: 3rem;
  text-align: left;
  margin-left: 2rem;
`;

export const TimeWrap = styled.div`
  display: flex;
  width: 17.6rem;
  height: 14rem;
  align-items: center;
  justify-content: center;
  font-size: ${Font.SIZE.TITLE3};
  font-weight: ${Font.WEIGHT.BOLD};
  font-family: 'Pretendard', sans-serif;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 80%;
  height: 14rem;
`;

export const LocationWrap = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 8rem;
  font-size: ${Font.SIZE.TITLE3};
  font-weight: ${Font.WEIGHT.SEMIBOLD};
  font-family: 'Pretendard', sans-serif;
  padding-top: 2rem;
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 6rem;
  font-size: ${Font.SIZE.BODY2};
  font-weight: ${Font.WEIGHT.REGULAR};
  font-family: 'Pretendard', sans-serif;
  padding-bottom: 2rem;
`;

export const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${Color.TrueWhite};
  padding: 1rem 0; /* 위아래 여백 추가 */
`;
