import {atom} from 'recoil';
import * as T from './Types';

export const MatchListState = atom<T.MatchListTypes[]>({
  key: 'MatchListState',
  default: [],
});
