import styled from '@emotion/styled';
import Font from '../../styles/Font';
import Color from '../../styles/Color';

export const Title = styled.div`
  font-size: ${Font.SIZE.TITLE1};
  font-weight: ${Font.WEIGHT.SEMIBOLD};
  color: ${Color.TrueBlack};
  margin-bottom: 1rem;
  margin-top: 3rem;
  text-align: left; /* 왼쪽 정렬 */
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

export const BlockItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: left;
  padding-left: 30%;
`;

export const BlockUserImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-right: 1rem;
`;

export const BlockLabelName = styled.div`
  display: flex;
  width: auto;
  height: 5rem;
  align-items: center;
  font-size: ${Font.SIZE.BODY1};
  font-weight: ${Font.WEIGHT.MEDIUM};
  font-family: 'Pretendard', sans-serif;
  color: ${Color.TrueBlack};
  margin-right: 4rem;
`;

export const BlockUserAge = styled.div`
  font-size: ${Font.SIZE.BODY2};
  font-weight: ${Font.WEIGHT.REGULAR};
  font-family: 'Pretendard', sans-serif;
`;

export const BlockUserLocation = styled.div`
  font-size: ${Font.SIZE.BODY2};
  font-weight: ${Font.WEIGHT.REGULAR};
  font-family: 'Pretendard', sans-serif;
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

export const PlayerSelectButton = styled.div<{active: boolean}>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({active}) => (active ? '#FED771' : '#D9D9D9')};
  border: none;
  margin-right: 10px;
  cursor: pointer;
`;
