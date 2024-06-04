import {atom} from 'recoil';
import * as T from './Types';

export const UserState = atom<T.User | null>({
  key: 'UserState',
  default: null,
});
