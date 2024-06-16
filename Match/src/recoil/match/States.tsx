import {atom} from 'recoil';
import * as T from './Types';

export const FavState = atom<T.FavoriteItem[]>({
  key: 'FavState',
  default: [],
});

export const MatchListState = atom<T.MatchListTypes[]>({
  key: 'MatchListState',
  default: [],
});

export const SelectedDateState = atom({
  key: 'SelectedDateState',
  default: new Date(),
});
