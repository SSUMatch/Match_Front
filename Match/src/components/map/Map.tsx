import React, {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import axios from 'axios';
import {PlacesState} from '@/recoil/place/States';
import * as S from './Styles';

const MapComponent: React.FC = () => {
  const [places, setPlaces] = useRecoilState(PlacesState);

  useEffect(() => {
    const initMap = () => {
      const mapContainer = document.getElementById('map'); // 지도를 표시할 div
      const mapOption = {
        center: new window.kakao.maps.LatLng(
          37.4985163075707,
          126.939014238644,
        ), // 하드 코딩된 중심좌표
        level: 3, // 지도의 확대 레벨
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

      const lat = 37.4985163075707;
      const lon = 126.939014238644;

      const locPosition = new window.kakao.maps.LatLng(lat, lon);
      map.setCenter(locPosition);

      axios
        .post('http://13.209.18.210/places/nearby', {
          latitude: lat,
          longitude: lon,
        })
        .then(response => {
          if (response.data.code === '200' && response.data.isSuccess) {
            console.log('API Response:', response.data.data); // 데이터 확인
            setPlaces(response.data.data);
          }
        })
        .catch(error => {
          console.error('Error fetching nearby places:', error);
        });
    };

    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(initMap);
    } else {
      // Kakao map script가 로드되지 않은 경우, 로드된 후 initMap 실행
      const script = document.createElement('script');
      script.src =
        '//dapi.kakao.com/v2/maps/sdk.js?appkey=c4a9e063ca0850b14f56e1b0b7fb6457&autoload=false&libraries=services';
      script.onload = () => window.kakao.maps.load(initMap);
      document.head.appendChild(script);
    }
  }, [setPlaces]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (window.kakao && window.kakao.maps && window.kakao.maps.services) {
      const keyword = (e.target as any).elements.keyword.value;
      const ps = new window.kakao.maps.services.Places();

      ps.keywordSearch(keyword, (data: any[], status: string) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const bounds = new window.kakao.maps.LatLngBounds();
          for (let i = 0; i < data.length; i++) {
            bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
          }
          const mapContainer = document.getElementById('map');
          const map = new window.kakao.maps.Map(mapContainer, {
            center: new window.kakao.maps.LatLng(
              37.4985163075707,
              126.939014238644,
            ),
            level: 3,
          });
          map.setBounds(bounds);
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
