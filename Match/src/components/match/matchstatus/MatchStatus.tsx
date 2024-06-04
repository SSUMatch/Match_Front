import React from 'react';
import * as S from './Styles';
import {MatchStatusProps} from './MatchStatusProps';

interface MatchStatusComponentProps extends MatchStatusProps {
  onClick: () => void;
}
const MatchStatus: React.FC<MatchStatusComponentProps> = ({
  status,
  onClick,
}) => {
  let label = '';

  if (status === '신청') {
    label = '신청';
  } else if (status === '마감 임박') {
    label = '마감 임박';
  } else if (status === '마감') {
    label = '마감';
  }
  return (
    <S.StatusContainer status={status} onClick={onClick}>
      <S.LabelContainer>{label}</S.LabelContainer>
    </S.StatusContainer>
  );
};
export default MatchStatus;
