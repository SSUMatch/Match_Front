import styled from '@emotion/styled';
import Color from '@/styles/Color'; // 기본 색상 정의 파일

export const MatchResultContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${Color.ResultBlue};
  margin-bottom: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const DateWrapper = styled.div`
  flex: 1;
  font-size: 1rem;
  color: ${Color.Gray70};
`;

export const MainInfoWrapper = styled.div`
  flex: 2;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${Color.TrueBlack};
`;

export const SubTitle = styled.div`
  font-size: 1rem;
  color: ${Color.Gray50};
  margin-top: 0.5rem;
`;

export const ResultWrapper = styled.div`
  flex: 1;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Result = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${Color.Gold};
`;

export const Points = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${Color.TrueBlack};
`;

export const Icon = styled.div`
  width: 12rem;
  height: 12rem;
  margin-top: 0.5rem;
`;

export const ExpandIcon = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: auto;
`;
