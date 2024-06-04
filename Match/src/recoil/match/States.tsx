import {atom} from 'recoil';
import * as T from './Types';

export const FavState = atom<T.FavoriteItem[]>({
  key: 'FavState',
  default: [],
});

export const MatchListState = atom<T.MatchListTypes[]>({
  key: 'MatchListState',
  default: [
    {
      matchId: 1,
      time: '16 : 00',
      name: '서울 숭실대학교 풋살 구장 A',
      type: '남성 6vs6 랭크 매치 (프로)',
      status: 'APPLYING',
    },
    {
      matchId: 2,
      time: '18 : 00',
      name: '서울 대방 투터치 풋살장 A',
      type: '여성 6vs6 일반 매치',
      status: 'FINISH',
    },
    {
      matchId: 3,
      time: '20 : 00',
      name: '서울 가산 마리오 스타디움 B',
      type: '남성 5vs5 랭크 매치 (세미 프로)',
      status: 'ONGOING',
    },
    {
      matchId: 4,
      time: '20 : 00',
      name: '서울 영등포 더에프 A',
      type: '남성 6vs6 랭크 매치 (프로)',
      status: 'APPLYING',
    },
    {
      matchId: 5,
      time: '20 : 00',
      name: '서울 숭실대학교 풋살 구장 B',
      type: '여성 6vs6 랭크 매치 (세미 프로)',
      status: 'APPLYING',
    },
    {
      matchId: 6,
      time: '22 : 00',
      name: '서울 용산 더베이스 1구장 (레알 마드리드)',
      type: '남성 6vs6 일반 매치',
      status: 'ONGOING',
    },
    {
      matchId: 7,
      time: '22 : 00',
      name: '서울 강남 도곡에프씨 (1구장)',
      type: '남성 5vs5 랭크 매치 (세미 프로)',
      status: 'FINISH',
    },
    {
      matchId: 8,
      time: '24 : 00',
      name: '서울 강동 고덕풋살장 (1구장)',
      type: '여성 6vs6 일반 매치',
      status: 'APPLYING',
    },
    // 추가적인 하드코딩
  ],
});
