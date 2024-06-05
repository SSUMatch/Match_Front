import {useEffect} from 'react';
import axios from 'axios';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {useNavigate} from 'react-router-dom';
import {MatchListState} from '@/recoil/match/States.tsx';
import * as L from './Styles.tsx';
import MatchStatus from './matchstatus/MatchStatus.tsx';

const Match = () => {
  const matches = useRecoilValue(MatchListState);
  const setMatches = useSetRecoilState(MatchListState);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://13.209.18.210/match', {
          params: {
            page: 0,
            take: 2,
            date: '2023-06-02', // 변경된 date 값
          },
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.data.code === '200' && response.data.isSuccess) {
          setMatches(response.data.data);
        } else {
          console.error('Failed to fetch data:', response.data.message);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [setMatches]); // 의존성 배열에 setMatches 추가

  const handleStatusClick = () => {
    navigate('/test');
  };

  return (
    <L.ListContainer>
      {matches.map(m => (
        <L.MatchItem key={m.matchId}>
          <L.TimeWrap>{m.time}</L.TimeWrap>
          <L.TitleWrap>
            <L.LocationWrap>{m.name}</L.LocationWrap>
            <L.TextWrap>{m.type}</L.TextWrap>
          </L.TitleWrap>
          <MatchStatus
            status={m.status as '신청' | '마감 임박' | '마감'}
            onClick={handleStatusClick}
          />
        </L.MatchItem>
      ))}
    </L.ListContainer>
  );
};

export default Match;
