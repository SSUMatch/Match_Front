import styled from '@emotion/styled';
import Font from '@/styles/Font';
import Color from '@/styles/Color';

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 53rem;
  height: 35rem;
  padding: 3rem;
  border-radius: 1.6rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
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
  font-size: ${Font.SIZE.TITLE3};
  color: ${Color.TrueBlack};
  line-height: normal;
  text-align: left;
`;

export const SubLabel = styled.span`
  display: block;
  width: auto;
  height: 4rem;
  font-weight: ${Font.WEIGHT.BOLD};
  font-size: ${Font.SIZE.BODY1};
  color: ${Color.Gray70};
  text-align: left;
  line-height: normal;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  //margin-top: 2rem;
`;

export const FavoriteButton = styled.button`
  width: 6rem;
  height: 6rem;
  color: ${Color.TrueWhite};
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  // &:hover {
  //   background-color: ${Color.BarBG};
  // }
  &:focus {
    outline: none; /* 포커스 시 테두리 제거 */
  }
`;

export const ApplyButton = styled.button`
  width: 16rem;
  height: 5rem;
  font-weight: ${Font.WEIGHT.BOLD};
  font-size: ${Font.SIZE.BODY2};
  color: ${Color.TrueWhite};
  background-color: ${Color.Applying};
  border: none;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${Color.Blue};
  }
`;

export const ApplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 18rem;
  padding-right: 1rem;
  justify-content: flex-end;
`;
