import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useSetRecoilState} from 'recoil';
import {
  matchDataState,
  placeInfoState,
  matchInfoState,
  matchDetailState,
} from '@/recoil/matchdetail/MatchDetailState.tsx';
import * as H from './Styles';
import ImageBanner from '@/components/imagebanner/ImageBanner';
import DropDown from '@/components/dropdown/DropDown';
import MatchData from '@/components/dropdown/matchdata/MatchData.tsx';
import MatchInfo from '@/components/dropdown/matchinfo/MatchInfo.tsx';
import PlaceInfo from '@/components/dropdown/placeinfo/PlaceInfo.tsx';
import MatchDetail from '@/components/matchDetail/MatchDetail.tsx';

const bannerImageUrl = '/assets/bannerImage.png';

const MatchPageDetail = () => {
  const {matchId} = useParams<{matchId: string}>();
  const setMatchData = useSetRecoilState(matchDataState);
  const setPlaceInfo = useSetRecoilState(placeInfoState);
  const setMatchInfo = useSetRecoilState(matchInfoState);
  const setMatchDetail = useSetRecoilState(matchDetailState);

  useEffect(() => {
    const fetchMatchDetail = async () => {
      try {
        const response = await axios.get(
          `https://kusitms28.store/match/detail?matchId=${matchId}`,
        );
        if (response.data.code === '200' && response.data.isSuccess) {
          const {
            matchData,
            placeInfo,
            matchInfo,
            date,
            placeName,
            location,
            price,
          } = response.data.data;
          setMatchData(matchData);
          setPlaceInfo(placeInfo);
          setMatchInfo(matchInfo);
          setMatchDetail({date, placeName, location, price});
        } else {
          console.error('Failed to fetch match detail:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching match detail:', error);
      }
    };

    fetchMatchDetail();
  }, [matchId, setMatchData, setPlaceInfo, setMatchInfo, setMatchDetail]);

  return (
    <div>
      <ImageBanner imgUrl={bannerImageUrl} />
      <H.ContentContainer>
        <H.DropDownContainer>
          <DropDown label='매치 데이터'>
            <MatchData />
          </DropDown>
          <DropDown label='구장 정보'>
            <PlaceInfo />
          </DropDown>
          <DropDown label='매치 정보'>
            <MatchInfo />
          </DropDown>
        </H.DropDownContainer>
        <MatchDetail />
      </H.ContentContainer>
    </div>
  );
};

export default MatchPageDetail;
