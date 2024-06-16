import styled from '@emotion/styled';
import Colors from '../../styles/Color';
import FONT from '../../styles/Font';

export const Layout = styled.div`
  width: 1280px;
  height: 100vh;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fcfcfc;
`;

export const H2 = styled.h2`
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3rem;
  color: #656565;
`;

export const InputLabel = styled.div`
  font-size: ${FONT.SIZE.BODY2};
  font-weight: ${FONT.WEIGHT.BOLD};
  color: ${Colors.Gray80};
  text-align: left;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  background: ${Colors.Applying};
  border: none;
  border-radius: 1.2rem;
  height: 4.7rem;
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  margin-top: 2rem;
  cursor: pointer;
`;

export const ErrorDiv = styled.div`
  padding: 0.5rem;
  font-size: ${FONT.SIZE.CAPTION};
  font-weight: ${FONT.WEIGHT.REGULAR};
  color: red;
`;

export const SelectOption = styled.option`
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.LIGHT};
  background: ${Colors.TrueWhite};
  color: ${({disabled}) => (disabled ? Colors.Gray30 : 'inherit')};
`;

export const SelectLarge = styled.select`
  box-sizing: border-box;
  border: 1px solid ${Colors.Gray30};
  display: flex;
  align-items: center;
  width: 40rem;
  height: 4rem;
  padding: 0 1.2rem;
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.LIGHT};
  border-radius: 1.2rem;
  background: ${Colors.TrueWhite};
`;

export const InputLarge = styled.input`
  box-sizing: border-box;
  border: 1px solid ${Colors.Gray30};
  display: flex;
  align-items: center;
  width: 40rem;
  height: 4rem;
  padding: 0 1.2rem;
  font-size: ${FONT.SIZE.BODY3};
  font-weight: ${FONT.WEIGHT.LIGHT};
  border-radius: 1.2rem;
  background: ${Colors.TrueWhite};
  &&::placeholder {
    color: ${Colors.Gray30};
  }
`;
