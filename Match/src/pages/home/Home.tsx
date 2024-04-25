import SearchBar from "@/components/searchbar/SearchBar";
import Menu from "@/components/menu/Menu";
import MatchList from "@/components/match/matchlist/MatchList";
import * as H from "./Styles";

function Home() {
  const time = "20:00";
  const location = "숭실대학교 풋살 구장 A";
  const title = "남성 6vs6 랭크 매치 (프로)";

  return (
    <div>
      <H.DefaultContainer />
      <SearchBar />
      <Menu />
      <MatchList time={time} location={location} title={title} />
    </div>
  );
}

export default Home;
