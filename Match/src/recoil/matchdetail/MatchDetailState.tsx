import {atom} from 'recoil';

interface Level {
  level: string;
  percent: string;
}

export const matchDataState = atom({
  key: 'matchDataState',
  default: {
    expect: '',
    levels: [] as Level[],
  },
});

export const placeInfoState = atom({
  key: 'placeInfoState',
  default: {
    gender: '',
    type: '',
    size: '',
    num: '',
  },
});

export const matchInfoState = atom({
  key: 'matchInfoState',
  default: {
    size: false,
    shoes: false,
    borrow: false,
    parking: 0,
    shower: false,
    toilet: false,
  },
});

export const matchDetailState = atom({
  key: 'matchDetailState',
  default: {
    date: '',
    placeName: '',
    location: '',
    price: '',
  },
});
