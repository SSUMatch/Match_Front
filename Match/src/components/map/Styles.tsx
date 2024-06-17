import styled from '@emotion/styled';
import Color from '@/styles/Color.ts';
import Font from '@/styles/Font.ts';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  height: 100%;
`;

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin-right: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const MapContainer = styled.div`
  display: flex;
  width: 100rem;
  height: 66rem;
`;

export const PlacesList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-height: 112rem; /* 최대 높이 설정 */
  overflow-y: auto; /* 세로 스크롤바 추가 */
`;

export const PlaceItem = styled.li`
  height: 12rem;
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid ${Color.Gray20};
`;

export const PlaceName = styled.div`
  display: flex;
  width: 25rem;
  align-items: center;
  justify-content: center;
  font-size: ${Font.SIZE.TITLE3};
  font-weight: ${Font.WEIGHT.MEDIUM};
  font-family: 'Pretendard', sans-serif;
`;

export const PlaceDistance = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14rem;
  font-size: ${Font.SIZE.TITLE3};
  font-weight: ${Font.WEIGHT.MEDIUM};
  font-family: 'Pretendard', sans-serif;
`;

export const PlaceLabel = styled.div`
  display: flex;
  margin-top: 4rem;
  margin-bottom: 2rem;
  font-size: ${Font.SIZE.TITLE1};
  font-weight: ${Font.WEIGHT.SEMIBOLD};
`;

export const MapBtn = styled.div`
  width: 12rem;
  height: 4.5rem;
  display: flex;
  margin-left: auto;
  margin-right: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${Font.SIZE.BODY3};
  font-weight: ${Font.WEIGHT.REGULAR};
  border-radius: 4rem;
  border: 1px solid ${Color.BorderBlue};
  //color: ${Color.Gray90};
  color: ${Color.MainColor};
  background: ${Color.TrueWhite};
  &:hover {
    cursor: pointer;
  }
`;
