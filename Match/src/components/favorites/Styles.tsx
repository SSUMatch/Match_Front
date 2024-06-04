import styled from '@emotion/styled';
import Color from '@/styles/Color';
import Font from '@/styles/Font';

export const Title = styled.div`
  font-size: ${Font.SIZE.TITLE1};
  font-weight: ${Font.WEIGHT.SEMIBOLD};
  color: ${Color.TrueBlack};
  margin-bottom: 1rem;
  margin-top: 3rem;
  text-align: left;
  margin-left: 2rem;
`;

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  height: 112rem;
  display: flex;
  flex-direction: column;
`;

export const FavItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
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

export const SelectAllButton = styled.button`
  display: block;
  //margin: 0 auto 10px auto;
  margin-left: auto;
  margin-right: 1rem;
  padding: 10px 20px;
  font-size: ${Font.SIZE.BODY1};
  font-weight: ${Font.WEIGHT.BOLD};
  color: ${Color.TrueWhite};
  background-color: ${Color.Bar};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${Color.Gold};
  }
`;

export const DeleteButton = styled.button`
  display: block;
  //margin: 20px auto 0 auto;
  margin-left: auto;
  margin-right: 1rem;
  margin-top: auto;
  padding: 10px 20px;
  font-size: ${Font.SIZE.BODY1};
  font-weight: ${Font.WEIGHT.BOLD};
  color: ${Color.TrueWhite};
  background-color: ${Color.Delete};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${Color.Ongoing};
  }
`;

export const RegionLabel = styled.div`
  font-size: ${Font.SIZE.TITLE1};
  font-weight: ${Font.WEIGHT.BOLD};
  color: ${Color.TrueBlack};
  margin: 1rem 0;
  padding-left: 2rem;
  text-align: left;
`;
