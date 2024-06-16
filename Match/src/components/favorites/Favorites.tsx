import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useRecoilState} from 'recoil';
import {useNavigate} from 'react-router-dom';
import * as L from './Styles';
import {FavState} from '@/recoil/match/States';
import * as T from '@/recoil/match/Types';
import FavIcon from '@/assets/svg/fav.svg?react';
import FavClickedIcon from '@/assets/svg/fav_clicked.svg?react';

const FavoriteList: React.FC = () => {
  const [fav, setFav] = useRecoilState(FavState);
  const [clicked, setClicked] = useState<{[key: number]: boolean}>({});
  const [allSelected, setAllSelected] = useState(false);
  const navigate = useNavigate();

  const fetchFavorites = () => {
    axios
      .get('https://kusitms28.store/users/2/favorites')
      .then(response => {
        if (response.data.code === '200' && response.data.isSuccess) {
          setFav(response.data.data);
        }
      })
      .catch(error => {
        console.error('Error fetching favorite data:', error);
      });
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const handleIconClick = (id: number) => {
    setClicked(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleSelectAll = () => {
    const newClicked = fav.reduce(
      (acc, item) => {
        acc[item.favoriteId] = !allSelected;
        return acc;
      },
      {} as {[key: number]: boolean},
    );

    setClicked(newClicked);
    setAllSelected(!allSelected);
  };

  const handleDeleteSelected = () => {
    const selectedIds = Object.keys(clicked)
      .filter(id => clicked[parseInt(id)])
      .map(id => parseInt(id));

    axios
      .delete('https://kusitms28.store/users/2/favorites', {
        data: selectedIds, // 요청 본문에 favoriteId 배열만 포함
      })
      .then(response => {
        if (response.data.code === '200' && response.data.isSuccess) {
          fetchFavorites(); // 상태를 업데이트하여 목록을 다시 가져옴
        }
      })
      .catch(error => {
        console.error('Error deleting favorites:', error);
      });

    // 삭제 후 상태 업데이트
    setClicked(prevClicked => {
      const newClicked = {...prevClicked};
      selectedIds.forEach(id => {
        delete newClicked[id];
      });
      return newClicked;
    });
    setAllSelected(false);
  };

  // 데이터를 region별로 그룹화하는 함수
  const groupByRegion = (items: T.FavoriteItem[]) => {
    return items.reduce(
      (acc, item) => {
        if (!acc[item.region]) {
          acc[item.region] = [];
        }
        acc[item.region].push(item);
        return acc;
      },
      {} as {[key: string]: T.FavoriteItem[]},
    );
  };

  const groupedFavorites = groupByRegion(fav);

  const handlePlaceClick = (placeId: number) => {
    navigate(`/places/${placeId}/matches`);
  };

  return (
    <L.ListContainer>
      <L.Title>즐겨찾는 구장</L.Title>
      <L.SelectAllButton onClick={handleSelectAll}>
        {allSelected ? '선택 해제' : '전체 선택'}
      </L.SelectAllButton>
      {Object.keys(groupedFavorites).map(region => (
        <div key={region}>
          <L.RegionLabel>{region}</L.RegionLabel>
          {groupedFavorites[region].map(m => (
            <L.FavItem
              key={m.favoriteId}
              onClick={() => handlePlaceClick(m.placeId)}
            >
              <L.IconWrap
                onClick={e => {
                  e.stopPropagation();
                  handleIconClick(m.favoriteId);
                }}
              >
                {clicked[m.favoriteId] ? <FavClickedIcon /> : <FavIcon />}
              </L.IconWrap>
              <L.NameWrap>{m.name}</L.NameWrap>
              <L.PlaceWrap>{m.address}</L.PlaceWrap>
            </L.FavItem>
          ))}
        </div>
      ))}
      <L.DeleteButton onClick={handleDeleteSelected}>삭제하기</L.DeleteButton>
    </L.ListContainer>
  );
};

export default FavoriteList;
