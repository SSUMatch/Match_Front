import * as H from './Styles';
import ImageBanner from '@/components/imagebanner/ImageBanner';
import DropDown from '@/components/dropdown/DropDown';
import MatchData from '@/components/dropdown/matchdata/MatchData.tsx';
import MatchInfo from '@/components/dropdown/matchinfo/MatchInfo.tsx';
import PlaceInfo from '@/components/dropdown/placeinfo/PlaceInfo.tsx';
import MatchDetail from '@/components/matchDetail/MatchDetail.tsx';

const bannerImageUrl = 'src/assets/bannerImage.png';
const MatchPageDetail = () => {
  return (
    <div>
      <ImageBanner imgUrl={bannerImageUrl} />
      <H.ContentContainer>
        <H.DropDownContainer>
          <DropDown label='매치 데이터'>
            <MatchData expect='세미 프로' />
          </DropDown>
          <DropDown label='구장 정보'>
            <MatchInfo />
          </DropDown>
          <DropDown label='매치 정보'>
            <PlaceInfo />
          </DropDown>
        </H.DropDownContainer>
        <MatchDetail
          date='3월 30일 토요일 20 : 00'
          location='상도동 상도로 369'
          placeName='숭실대학교 풋살 구장 A'
        />
      </H.ContentContainer>
    </div>
  );
};

export default MatchPageDetail;
