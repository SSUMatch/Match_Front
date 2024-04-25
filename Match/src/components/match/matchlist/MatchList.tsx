import * as L from "./Styles";
import MatchStatus from "../matchstatus/MatchStatus";
import { MatchListProps } from "./MatchListProps.ts";

function MatchList({ time, location, title }: MatchListProps) {
  return (
    <L.ListContainer>
      <L.MatchItem key={title}>
        <L.TimeWrap>{time}</L.TimeWrap>
        <L.TitleWrap>
          <L.LocationWrap>{location}</L.LocationWrap>
          <L.TextWrap>{title}</L.TextWrap>
        </L.TitleWrap>
        <MatchStatus status="APPLYING" />
      </L.MatchItem>
    </L.ListContainer>
  );
}

export default MatchList;
