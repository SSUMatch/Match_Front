import SearchBar from '@/components/searchbar/SearchBar';
import Menu from '@/components/menu/Menu';
import MatchList from '@/components/match/matchlist/MatchList';
import WeekCalendar from '@/components/calendar/WeekCalendar.tsx';
import ImageBanner from '@/components/imagebanner/ImageBanner.tsx';

const bannerImageUrl = 'src/assets/mainImage.png';
const Home = () => {
  return (
    <div>
      <ImageBanner imgUrl={bannerImageUrl} />
      <SearchBar />
      <WeekCalendar />
      <Menu />
      <MatchList />
    </div>
  );
};

export default Home;
