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

  if (status === 'APPLYING') {
    label = '신청';
  } else if (status === 'ONGOING') {
    label = '마감 임박';
  } else if (status === 'FINISH') {
    label = '마감';
  }
  return (
    <S.StatusContainer status={status} onClick={onClick}>
      <S.LabelContainer>{label}</S.LabelContainer>
    </S.StatusContainer>
  );
};
export default MatchStatus;
