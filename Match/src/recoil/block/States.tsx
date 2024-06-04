import {atom} from 'recoil';
import * as T from './Types';

export const BlockState = atom<T.BlockedUser[]>({
  key: 'BlockState',
  default: [],
});
