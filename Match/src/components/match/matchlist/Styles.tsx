import styled from "@emotion/styled";
import Font from "../../../styles/Font";
import Color from "../../../styles/Color";

export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 120rem;
  height: 112rem;
`;

export const MatchItem = styled.li`
  display: flex;
  align-items: center;
  border: 0.1rem solid ${Color.Gray20};
  //padding: 10px;
`;

export const LabelWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17.6rem;
  height: 14rem;
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33.2rem;
  height: 14rem;
  font-size: ${Font.SIZE.TITLE3};
  font-weight: ${Font.WEIGHT.BOLD};
  font-family: "Pretendard", sans-serif;
`;

export const PeriodWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29.4rem;
  height: 14rem;
  font-size: ${Font.SIZE.TITLE3};
  font-weight: ${Font.WEIGHT.REGULAR};
  font-family: "Pretendard", sans-serif;
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20rem;
  height: 14rem;
`;
