import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import * as L from './Styles';
import MatchStatus from '@/components/match/matchstatus/MatchStatus';
// import {MatchListTypes} from '@/recoil/match/Types';

interface MatchData {
  matchId: number;
  time: string;
  name: string;
  type: string;
  status: string;
  date: string;
}

interface MatchResponse {
  [key: string]: MatchData[];
}

const PlaceMatches: React.FC = () => {
  const {placeId} = useParams<{placeId: string}>();
  const [matches, setMatches] = useState<MatchResponse>({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(
          `https://kusitms28.store/places/${placeId}/matches`,
        );
        if (response.data.code === '200' && response.data.isSuccess) {
          setMatches(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching match data:', error);
      }
    };

    fetchMatches();
  }, [placeId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMatchClick = (matchId: number) => {
    navigate(`/match/detail/${matchId}`);
  };
  return (
    <L.ListContainer>
      {Object.keys(matches).map(date => (
        <div key={date}>
          <L.DateLabel>{date}</L.DateLabel>
          {matches[date].map(match => (
            <L.MatchItem key={match.matchId}>
              <L.TimeWrap>{match.time}</L.TimeWrap>
              <L.TitleWrap>
                <L.LocationWrap>{match.name}</L.LocationWrap>
                <L.TextWrap>{match.type}</L.TextWrap>
              </L.TitleWrap>
              <MatchStatus
                status={match.status as '신청' | '마감 임박' | '마감'}
                onClick={() => handleMatchClick(match.matchId)}
              />
            </L.MatchItem>
          ))}
        </div>
      ))}
    </L.ListContainer>
  );
};

export default PlaceMatches;
