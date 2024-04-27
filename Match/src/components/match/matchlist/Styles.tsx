import styled from '@emotion/styled';
import Font from '../../../styles/Font';
import Color from '../../../styles/Color';

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 120rem;
  height: 112rem;
`;

export const MatchItem = styled.li`
  display: flex;
  align-items: center;
  border: 0.1rem solid ${Color.Gray20};
  //padding: 10px;
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
