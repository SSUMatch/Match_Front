import React, {useEffect, useState} from 'react';
import {useRecoilState} from 'recoil';
import axios from 'axios';
import {PlacesState} from '@/recoil/place/States';
import * as S from './Styles';

const MapComponent: React.FC = () => {
  const apiKey = import.meta.env.VITE_KAKAO_MAPS_API_KEY;
  const [places, setPlaces] = useRecoilState(PlacesState);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false&libraries=services`;
    script.onload = () => {
      kakao.maps.load(() => {
        const mapContainer = document.getElementById('map'); // 지도를 표시할 div
        const mapOption = {
          center: new kakao.maps.LatLng(37.4985163075707, 126.939014238644), // 중심 좌표
          level: 3, // 확대 레벨
        };
        const map = new kakao.maps.Map(mapContainer, mapOption);
        setMap(map);

        // 초기 위치 설정 및 주변 장소 검색
        const lat = 37.4985163075707;
        const lon = 126.939014238644;
        const locPosition = new kakao.maps.LatLng(lat, lon);
        map.setCenter(locPosition);

        axios
          .post('https://kusitms28.store/places/nearby', {
            latitude: lat,
            longitude: lon,
          })
          .then(response => {
            if (response.data.code === '200' && response.data.isSuccess) {
              setPlaces(response.data.data);
            }
          })
          .catch(error => {
            console.error('Error fetching nearby places:', error);
          });
      });
    };
    document.head.appendChild(script);
  }, [apiKey, setPlaces]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (map && kakao.maps.services) {
      const keyword = (e.target as any).elements.keyword.value;
      const ps = new kakao.maps.services.Places();

      ps.keywordSearch(keyword, (data, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const bounds = new kakao.maps.LatLngBounds();
          data.forEach(place => {
            bounds.extend(new kakao.maps.LatLng(place.y, place.x));
          });
          map.setBounds(bounds);

          // 마커 설정
          data.forEach(place => {
            new kakao.maps.Marker({
              map,
              position: new kakao.maps.LatLng(place.y, place.x),
              title: place.place_name,
            });
          });
        }
      });
    } else {
      console.error('Kakao maps services are not available.');
    }
  };

  return (
    <S.Container>
      <S.SearchForm onSubmit={handleSearch}>
        <S.Input
          type='text'
          name='keyword'
          placeholder='지역, 건물 이름으로 검색'
        />
        <S.Button type='submit'>검색</S.Button>
      </S.SearchForm>
      <S.MapContainer id='map' />
      <S.PlacesList>
        {places.map(place => (
          <S.PlaceItem key={place.placeId}>
            <S.PlaceName>{place.name}</S.PlaceName>
            <S.PlaceDistance>{place.distance}</S.PlaceDistance>
          </S.PlaceItem>
        ))}
      </S.PlacesList>
    </S.Container>
  );
};

export default MapComponent;
