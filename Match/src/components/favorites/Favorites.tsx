import {useRecoilValue} from 'recoil';
import {useState} from 'react';
import * as L from './Styles';
import {FavState} from '@/recoil/match/States.tsx';
import FavIcon from '@/assets/svg/fav.svg?react';
import FavClickedIcon from '@/assets/svg/fav_clicked.svg?react';

const FavoriteList = () => {
  const fav = useRecoilValue(FavState);
  const [clicked, setClicked] = useState<{[key: number]: boolean}>({});
  // const setFav = useSetRecoilState(FavState);

  const handleIconClick = (id: number) => {
    setClicked(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <L.ListContainer>
      <L.Title>즐겨찾는 구장</L.Title>
      {fav.map(m => (
        <L.FavItem key={m.favId}>
          <L.IconWrap onClick={() => handleIconClick(m.favId)}>
            {clicked[m.favId] ? <FavClickedIcon /> : <FavIcon />}
          </L.IconWrap>
          <L.NameWrap>{m.name}</L.NameWrap>
          <L.PlaceWrap>{m.place}</L.PlaceWrap>
        </L.FavItem>
      ))}
    </L.ListContainer>
  );
};

export default FavoriteList;
