import {useEffect, useState} from 'react';
import axios from 'axios';
import {useRecoilValue, useSetRecoilState} from 'recoil';
import {useNavigate} from 'react-router-dom';
import {format} from 'date-fns';
import {MatchListState, SelectedDateState} from '@/recoil/match/States';
import * as L from './Styles';
import MatchStatus from './matchstatus/MatchStatus';

const Match = () => {
  const matches = useRecoilValue(MatchListState);
  const setMatches = useSetRecoilState(MatchListState);
  const selectedDate = useRecoilValue(SelectedDateState);
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const take = 5; // 한 페이지에 나올 항목의 수

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://kusitms28.store/match', {
          params: {
            page,
            take,
            date: format(selectedDate, 'yyyy-MM-dd'),
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
  }, [selectedDate, page, setMatches]);

  const handleStatusClick = () => {
    navigate('/test');
  };

  const handlePreviousPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
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
      <L.Pagination>
        <L.PaginationButton onClick={handlePreviousPage} disabled={page === 0}>
          이전
        </L.PaginationButton>
        <L.PageNumber>{page + 1}</L.PageNumber>
        <L.PaginationButton onClick={handleNextPage}>다음</L.PaginationButton>
      </L.Pagination>
    </L.ListContainer>
  );
};

export default Match;
