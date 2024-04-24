import * as S from "./Styles";
import { MatchStatusProps } from "./MatchStatusProps";

function MatchStatus({ status }: MatchStatusProps) {
  let label = "";

  if (status === "APPLYING") {
    label = "신청";
  } else if (status === "ONGOING") {
    label = "마감 임박";
  } else if (status === "FINISH") {
    label = "마감";
  }
  return (
    <S.StatusContainer status={status}>
      <S.LabelContainer>{label}</S.LabelContainer>
    </S.StatusContainer>
  );
}
export default MatchStatus;
