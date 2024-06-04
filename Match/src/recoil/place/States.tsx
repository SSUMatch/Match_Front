import {atom} from 'recoil';
import * as T from './Types';

export const PlacesState = atom<T.Place[]>({
  key: 'PlacesState',
  default: [],
});
