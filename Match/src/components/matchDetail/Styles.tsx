import styled from '@emotion/styled';
import Font from '@/styles/Font';
import Color from '@/styles/Color';

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 53rem;
  height: 35rem;
  padding: 2rem;
  border: 1px solid black;
`;

export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
`;
export const HeadLabel = styled.span`
  display: block;
  width: auto;
  height: 4rem;
  font-weight: ${Font.WEIGHT.MEDIUM};
  font-size: ${Font.SIZE.BODY1};
  color: ${Color.TrueBlack};
  justify-items: center;
  line-height: 4rem;
`;

export const SubLabel = styled.span`
  display: block;
  width: auto;
  height: 4rem;
  font-weight: ${Font.WEIGHT.BOLD};
  font-size: ${Font.SIZE.BODY3};
  color: ${Color.Gray70};
  justify-items: center;
  line-height: 4rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //margin-top: 2rem;
`;

export const FavoriteButton = styled.button`
  width: 4rem;
  height: 4rem;
  color: ${Color.TrueWhite};
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${Color.BarBG};
  }
`;

export const ApplyButton = styled.button`
  width: 20rem;
  height: 7rem;
  font-weight: ${Font.WEIGHT.BOLD};
  font-size: ${Font.SIZE.BODY1};
  color: ${Color.TrueWhite};
  background-color: ${Color.Applying};
  border: none;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${Color.Blue};
  }
`;
