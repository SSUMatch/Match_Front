import styled from '@emotion/styled';
import tw from 'twin.macro';
import Font from '../../styles/Font.ts';
import Color from '../../styles/Color.ts';

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  height: 112rem;
`;

export const MatchItem = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid ${Color.Gray20};
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
export const Pagination = tw.div`flex justify-center items-center mt-4`;
export const PaginationButton = tw.button`px-4 py-2 mx-2 bg-gray-200 rounded disabled:opacity-50`;
export const PageNumber = tw.span`px-4 py-2`;
