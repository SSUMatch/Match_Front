import {atom} from 'recoil';
import {GameData} from '@/recoil/matchlist/Types.tsx';

export const gameDataState = atom<GameData | null>({
  key: 'gameDataState',
  default: null,
});

export const selectedQuarterState = atom<string>({
  key: 'selectedQuarterState',
  default: '',
});

export const selectedTeamState = atom<string>({
  key: 'selectedTeamState',
  default: 'RED',
});
