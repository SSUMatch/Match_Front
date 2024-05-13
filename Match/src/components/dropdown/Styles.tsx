import styled from '@emotion/styled';
import Font from '@/styles/Font';
import Color from '@/styles/Color';

export const StyledButton = styled.button`
  width: 63rem;
  height: 10rem;
  background-color: ${Color.TrueWhite};
  border-radius: 1.6rem;
  font-weight: ${Font.WEIGHT.MEDIUM};
  font-size: ${Font.SIZE.BODY1};
  color: ${Color.TrueBlack};
  //padding: 10px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
  &:active {
    border-radius: 1.6rem 1.6rem 0 0;
  }
`;

export const ContentArea = styled.div`
  width: 63rem;
  height: 50rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top: none;
`;
