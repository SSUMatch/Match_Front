import styled from '@emotion/styled';
import Font from '../../../styles/Font';
import Color from '../../../styles/Color';

export const StatusContainer = styled.div<{status: string}>`
  width: 15rem;
  height: 5rem;
  display: flex;
  border: solid 0.1rem ${Color.Gray20};
  border-radius: 2.4rem;
  background-color: ${({status}) => {
    switch (status) {
      case '신청':
        return Color.Applying;
      case '마감 임박':
        return Color.Ongoing;
      case '마감':
        return Color.Finish;
      default:
        return Color.Gray20;
    }
  }};
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard', sans-serif; // Ensure Font-family declaration is correctly formatted
  font-size: ${Font.SIZE.TITLE2};
  color: ${Color.TrueWhite};
  font-weight: ${Font.WEIGHT.SEMIBOLD};
  cursor: pointer;
`;

export const LabelContainer = styled.div`
  width: auto;
  height: auto;
  font-weight: ${Font.WEIGHT.SEMIBOLD};
  font-size: ${Font.SIZE.BODY1};
  color: ${Color.TrueWhite};
`;
