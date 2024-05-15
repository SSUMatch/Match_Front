import styled from '@emotion/styled';
import Color from '@/styles/Color.ts';
import Font from '@/styles/Font.ts';

export const Title = styled.div`
  font-size: ${Font.SIZE.TITLE1};
  font-weight: ${Font.WEIGHT.SEMIBOLD};
  color: ${Color.TrueBlack};
  margin-bottom: 1rem;
  margin-top: 3rem;
`;
export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  height: 112rem;
`;

export const FavItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  //padding: 10px;
`;

export const NameWrap = styled.div`
  display: flex;
  width: auto;
  height: 5rem;
  align-items: center;
  font-size: ${Font.SIZE.BODY1};
  font-weight: ${Font.WEIGHT.BOLD};
  font-family: 'Pretendard', sans-serif;
  color: ${Color.TrueBlack};
  margin-right: 2rem;
`;

export const PlaceWrap = styled.div`
  display: flex;
  width: auto;
  height: 5rem;
  align-items: center;
  font-size: ${Font.SIZE.BODY2};
  font-weight: ${Font.WEIGHT.MEDIUM};
  font-family: 'Pretendard', sans-serif;
  color: ${Color.TrueBlack};
`;

export const IconWrap = styled.div`
  cursor: pointer;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
`;
