import {atom} from 'recoil';
import {GameData} from '@/recoil/matchlist/Types.tsx';

export const gameDataState = atom<GameData[]>({
  key: 'gameDataState',
  default: [],
});

export const selectedQuarterState = atom<string>({
  key: 'selectedQuarterState',
  default: '',
});

export const selectedTeamState = atom<string>({
  key: 'selectedTeamState',
  default: 'RED',
});
