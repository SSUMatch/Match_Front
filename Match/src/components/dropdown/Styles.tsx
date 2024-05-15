import styled from '@emotion/styled';
import Font from '@/styles/Font';
import Color from '@/styles/Color';

export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.6rem;
  width: 62rem;
  height: 10rem;
  background-color: ${Color.TrueWhite};
  border-radius: 1.6rem;
  //padding: 10px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
  }
  //&:active {
  //  border-radius: 1.6rem 1.6rem 0 0;
  //}
  margin-top: 2rem;
`;

export const ContentArea = styled.div`
  width: 62rem;
  height: 40rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top: none;
  border-radius: 0 0 1.6rem 1.6rem; /* 하단 모서리 둥글게 */
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export const LabelContainer = styled.span`
  flex-grow: 1;
  text-align: center;
  font-weight: ${Font.WEIGHT.MEDIUM};
  font-size: ${Font.SIZE.TITLE3};
  color: ${Color.TrueBlack};
`;
