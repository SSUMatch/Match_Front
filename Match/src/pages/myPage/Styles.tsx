import styled from '@emotion/styled';
import Font from '../../styles/Font';
import Color from '../../styles/Color';

export const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Sidebar = styled.div`
  width: 20%;
  height: 100%;
  background-color: ${Color.Gray10};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`;

export const SidebarItem = styled.div`
  width: 80%;
  height: 10rem;
  padding: 1rem;
  display: flex;
  font-size: ${Font.SIZE.BODY1};
  font-weight: ${Font.WEIGHT.BOLD};
  color: ${Color.TrueBlack};
  text-align: center;
  margin-bottom: 1rem;
  align-items: center; /* 수직 정렬 */
  justify-content: center; /* 수평 정렬 */
  cursor: pointer;
  &:hover {
    background-color: ${Color.Gray20};
  }
`;

export const Content = styled.div`
  width: 80%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
`;

export const UserImage = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  border: 1px solid black;
  margin-bottom: 4rem;
`;

export const RecordInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const RecordWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

export const RecordItem = styled.div`
  position: relative;
  font-size: ${Font.SIZE.TITLE2};
  font-weight: ${Font.WEIGHT.SEMIBOLD};
  background-color: ${Color.Gray10};
  padding: 1rem;
  border-radius: 2rem;
  width: 20rem;
  height: 10rem;
  text-align: center;
  display: flex;
  align-items: center; /* 수직 정렬 */
  justify-content: center; /* 수평 정렬 */
  border: 1px solid rgba(0, 0, 0, 0.1); /* 투명도 10%의 검은색 테두리 */
`;

export const RecordLongItem = styled.div`
  position: relative;
  font-size: ${Font.SIZE.TITLE2};
  font-weight: ${Font.WEIGHT.SEMIBOLD};
  background-color: ${Color.Gray10};
  padding: 1rem;
  border-radius: 2rem;
  text-align: center;
  width: 44rem;
  height: 10rem;
  display: flex;
  align-items: center; /* 수직 정렬 */
  justify-content: center; /* 수평 정렬 */
  border: 1px solid rgba(0, 0, 0, 0.1); /* 투명도 10%의 검은색 테두리 */
`;

export const Label = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: ${Font.SIZE.BODY3};
  font-weight: ${Font.WEIGHT.REGULAR};
  background-color: ${Color.Gray10};
  padding: 0 0.5rem;
`;
