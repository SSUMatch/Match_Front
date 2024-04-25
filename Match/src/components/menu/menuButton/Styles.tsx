import styled from "@emotion/styled";
import Color from "../../../styles/Color.ts";
import Font from "../../../styles/Font";

export const StyledBtn = styled.div`
  width: 9.5rem;
  height: 4.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${Font.SIZE.BODY3};
  font-weight: ${Font.WEIGHT.REGULAR};
  border-radius: 4rem;
  border: 1px solid ${Color.MainLight};
  margin: 1rem;
  //color: ${Color.Gray90};
  color: ${Color.MainColor};
  background: ${Color.TrueWhite};
  &:hover {
    cursor: pointer;
  }
`;

export const SelectedBtn = styled(StyledBtn)`
  color: ${Color.MainColor};
  background: ${Color.TrueWhite};
  border: 1px solid ${Color.MainLight};
`;
