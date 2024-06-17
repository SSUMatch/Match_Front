import React, {useEffect, useState} from 'react';
import * as S from './Styles';

const MapComponent: React.FC = () => {
  const apiKey = import.meta.env.VITE_KAKAO_MAPS_API_KEY;
  const [map, setMap] = useState<kakao.maps.Map | null>(null);

  const initializeMap = () => {
    const mapContainer = document.getElementById('map'); // 지도를 표시할 div
    const mapOption = {
      center: new kakao.maps.LatLng(37.4985163075707, 126.939014238644), // 중심 좌표
      level: 3, // 확대 레벨
    };
    const newMap = new kakao.maps.Map(mapContainer, mapOption);
    setMap(newMap);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services`;
    script.async = true;
    script.onload = () => {
      initializeMap();
    };
    document.head.appendChild(script);
  }, [apiKey]);

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
            new kakao.maps.Marker({
              map,
              position: new kakao.maps.LatLng(place.y, place.x),
              title: place.place_name,
            });
          });
          map.setBounds(bounds);
        } else {
          console.error('Places search failed with status:', status);
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
    </S.Container>
  );
};

export default MapComponent;
