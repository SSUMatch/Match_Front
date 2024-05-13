import styled from '@emotion/styled';
import Color from '@/styles/Color.ts';
import Font from '@/styles/Font.ts';
// import { ReactComponent as SearchIconSVG } from "../../assets/svg/search.svg";

export const Container = styled.div`
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1440px;
`;

export const SearchBarContainer = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 6rem;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  //padding-left: 3rem;
  justify-content: flex-start;
  align-items: center;
  color: ${Color.MainColor};
  background: rgba(204, 204, 204, 0.2);
  border-radius: 2.5rem;
`;

export const Input = styled.input`
  margin-left: 3rem;
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: ${Font.SIZE.BODY1};
  font-weight: ${Font.WEIGHT.REGULAR};
  height: 3rem;
  &::placeholder {
    color: ${Color.MainLight};
  }
`;

export const IconDiv = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// export const SearchIcon = styled(SearchIconSVG)`
//   width: 18px;
//   height: 18px;
// `;
