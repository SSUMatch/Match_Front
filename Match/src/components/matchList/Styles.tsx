import styled from '@emotion/styled';

export const AppContainer = styled.div`
  padding: 20px;
`;

export const GameInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const InfoItem = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const Label = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

export const Value = styled.div``;

export const POM = styled.img`
  width: 50px;
  height: 50px;
  margin: 10px 0;
`;

export const NumberColorImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const QuarterButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const QuarterButton = styled.button<{active: boolean}>`
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border: ${({active}) => (active ? '2px solid black' : '1px solid #ccc')};
  background-color: ${({active}) => (active ? '#f0f0f0' : 'white')};

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const QuarterInfo = styled.div`
  margin-top: 20px;
`;

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const TeamScore = styled.div`
  display: flex;
  align-items: center;

  img {
    margin: 0 5px; /* 이미지 간격 조정 */
  }
`;

export const Score = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin: 0 5px; /* 숫자 간격 조정 */
`;

export const TeamContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Team = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
`;

export const PlayerStats = styled.div<{active: boolean}>`
  display: flex;
  align-items: center;
  justify-content: center; /* 가운데 정렬 */
  margin-bottom: 10px;
  padding: 10px;
  background-color: ${({active}) => (active ? '#f0f0f0' : 'white')};
  cursor: pointer;
  border: ${({active}) => (active ? '2px solid black' : '1px solid #ccc')};

  img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  p {
    margin: 0 10px; /* 간격을 넉넉하게 조정 */
  }
`;

export const PlayerSelectButton = styled.button<{active: boolean}>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({active}) => (active ? '#FED771' : '#D9D9D9')};
  border: none;
  margin-right: 10px;
  cursor: pointer;
`;

export const TeamButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const TeamButton = styled.button<{active: boolean}>`
  padding: 10px;
  margin: 0 10px;
  font-size: 16px;
  cursor: pointer;
  border: ${({active}) => (active ? '2px solid black' : '1px solid #ccc')};
  background-color: ${({active}) => (active ? '#f0f0f0' : 'white')};

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const TeamInfo = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center; /* 가운데 정렬 */
`;

export const BlockButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ff4d4f;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ff7875;
  }
`;
