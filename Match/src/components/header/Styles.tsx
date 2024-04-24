import styled from "@emotion/styled";
import Font from "../../styles/Font";
import Color from "../../styles/Color";

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  border: 0.1rem solid ${Color.Gray20};
`;

export const LogoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  color: ${Color.MainBlack};
  font-size: ${Font.SIZE.TITLE1};
  font-weight: ${Font.WEIGHT.SEMIBOLD};
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderBtn = styled.div`
  display: flex;
  height: 3.875rem;
  padding: 1.58333rem 0rem;
  margin: 0 8rem;
  justify-content: center;
  align-items: center;
  color: ${Color.MainBlack};
  font-size: ${Font.SIZE.TITLE3};
  font-weight: ${Font.WEIGHT.REGULAR};

  &:hover {
    color: ${Color.MainLight};
  }

  &:active {
    color: ${Color.MainColor};
  }
`;

export const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileText = styled.div`
  font-size: ${Font.SIZE.BODY3};
  font-weight: ${Font.WEIGHT.REGULAR};
`;

export const LogoutText = styled.div`
  font-size: ${Font.SIZE.BODY3};
  font-weight: ${Font.WEIGHT.REGULAR};
  margin-right: 2rem;
  cursor: pointer;
`;

export const RowContainer = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Gap = styled.div`
  margin-left: 40rem;
`;

export const RightContainer = styled.div`
  width: 1280px;
  display: flex;
  justify-content: right;
`;

export const Button = styled.button`
  background: none;
  border: none;
`;
