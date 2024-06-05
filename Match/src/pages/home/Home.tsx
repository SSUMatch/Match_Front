import SearchBar from '@/components/searchbar/SearchBar';
import Menu from '@/components/menu/Menu';
import Match from '@/components/match/Match.tsx';
import WeekCalendar from '@/components/calendar/WeekCalendar.tsx';
import ImageBanner from '@/components/imagebanner/ImageBanner.tsx';

const bannerImageUrl = '/assets/mainImage.png';
const Home = () => {
  return (
    <div>
      <ImageBanner imgUrl={bannerImageUrl} />
      <SearchBar />
      <WeekCalendar />
      <Menu />
      <Match />
    </div>
  );
};

export default Home;
