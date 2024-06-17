import styled from '@emotion/styled';
import Color from '@/styles/Color.ts';
import Font from '@/styles/Font.ts';

interface GameInfoProps {
  isWin: boolean;
}

export const AppContainer = styled.div`
  background-color: ${Color.MildBlue};
  border-radius: 1rem;
  padding: 3px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

export const GraphButton = styled.button`
  display: block;
  //margin: 0 auto 10px auto;
  margin: 1.5rem 1rem 1.5rem auto;
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

export const GameInfo = styled.div<GameInfoProps>`
  display: flex;
  background-color: ${({isWin}) => (isWin ? Color.WinBG : Color.LightBlue)};
  flex-direction: row;
  margin-bottom: 20px;
  cursor: pointer;
  align-items: center; /* 수평 중앙 정렬 */
  border-radius: 1rem;
  width: 100%;
  height: 15rem;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30rem;
  margin-left: 4rem;
`;

export const InfoItem = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const DateValue = styled.div`
  font-size: ${Font.SIZE.BODY1};
  font-weight: ${Font.WEIGHT.MEDIUM};
  color: ${Color.TrueBlack};
`;

export const PlaceValue = styled.div`
  font-size: ${Font.SIZE.TITLE3};
  font-weight: ${Font.WEIGHT.BOLD};
  color: ${Color.TrueBlack};
`;

export const TypeValue = styled.div`
  font-size: ${Font.SIZE.BODY1};
  font-weight: ${Font.WEIGHT.REGULAR};
  color: ${Color.Gray50};
`;

export const PointValue = styled.div`
  font-size: ${Font.SIZE.TITLE2};
  font-weight: ${Font.WEIGHT.BOLD};
  color: ${Color.TrueBlack};
`;

export const Label = styled.div`
  font-weight: bold;
  margin-right: 10px;
`;

export const ImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 수평 중앙 정렬 */
  justify-content: center; /* 수직 중앙 정렬 */
`;

export const POM = styled.img`
  width: 10rem;
  height: 3rem;
  margin: 10px 0;
`;

export const NumberColorImage = styled.img`
  width: 8rem;
  height: 8rem;
  margin-right: 8rem;
  margin-left: auto;
`;

export const QuarterButtonContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  gap: 2rem;
  //background-color: red;
`;

export const QuarterButton = styled.button<{active: boolean}>`
  padding: 1.5rem 2.5rem;
  font-size: ${Font.SIZE.BODY1};
  font-weight: ${Font.WEIGHT.MEDIUM};
  color: ${Color.TrueWhite};
  cursor: pointer;
  border-radius: 1.2rem;
  //border: ${({active}) => (active ? '1px solid #5383E8' : 'none')};
  border: none;
  background-color: ${({active}) => (active ? '#5AD2FF' : 'white')};
  color: ${({active}) => (active ? 'white' : 'black')};

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

export const UpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-bottom: 4rem;
  margin-right: 4rem;
  margin-left: 4rem;
  border-radius: 2rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

export const TeamScore = styled.div`
  display: flex;
  align-items: center;

  img {
    margin: 0 5px; /* 이미지 간격 조정 */
  }
`;

export const Score = styled.span`
  font-size: ${Font.SIZE.HYPER};
  font-weight: ${Font.WEIGHT.BOLD};
  color: ${Color.TrueBlack};
  margin: 0 5px; /* 숫자 간격 조정 */
`;

export const TeamContainer = styled.div`
  display: flex;
  justify-content: center;
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
  //background-color: ${({active}) => (active ? '#f0f0f0' : 'white')};
  cursor: pointer;
  //border: ${({active}) => (active ? '2px solid black' : '1px solid #ccc')};

  border: none;
  img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  p {
    margin: 0 10px; /* 간격을 넉넉하게 조정 */
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

export const TeamButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1.5rem;
  //background-color: red;
`;

export const TeamButton = styled.button<{active: boolean}>`
  padding: 2rem 5rem;
  font-size: ${Font.SIZE.BODY1};
  font-weight: ${Font.WEIGHT.MEDIUM};
  color: ${Color.TrueWhite};
  cursor: pointer;
  border-radius: 1.2rem;
  border: none;
  color: ${({active}) => (active ? 'white' : 'black')};
  background-color: ${({active}) => (active ? 'red' : 'white')};

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const TeamInfo = styled.div`
  margin: 2rem 4rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center; /* 가운데 정렬 */
  background-color: white;
  border-radius: 2rem;
`;

export const BlockButton = styled.button`
  margin: 20px 1rem 1rem auto;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff7875;
  }
`;
