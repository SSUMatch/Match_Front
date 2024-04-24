// import { useNavigate } from "react-router-dom";
// import * as L from "./Styles";
// import MatchStatus from "../MatchStatus/MatchStatus";
// import { MatchState } from "../../recoil/MatchList";
//
// function MatchList() {
//   const navigate = useNavigate();
//   // const setMatchState = useSetRecoilState(MatchState);
//   // const matchList = useRecoilValue(MatchState);
//
//   const handleApplyClick = (competitionId: number) => {
//     console.log("competitionId:", competitionId);
//     navigate(`/competitions/apply/${competitionId}`);
//   };
//
//   return (
//     <L.ListContainer>
//       {matchList.map((contest, index) => (
//         <L.MatchItem key={index}>
//           <L.LabelWrap>
//             <MatchStatus status={contest.competitionState} />
//           </L.LabelWrap>
//           <L.TitleWrap>{contest.title}</L.TitleWrap>
//           <L.PeriodWrap>
//             {contest.startDate.substring(0, 10)} -{" "}
//             {contest.endDate.substring(0, 10)}
//           </L.PeriodWrap>
//         </L.MatchItem>
//       ))}
//     </L.ListContainer>
//   );
// }
//
// export default MatchList;
