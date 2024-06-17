import React, {useEffect, useState} from 'react';

import * as S from './Styles';

// declare global {
//   interface Window {
//     kakao: any;
//   }
// }

const MapComponent: React.FC = () => {
  const apiKey = import.meta.env.VITE_KAKAO_MAPS_API_KEY;
  const [map, setMap] = useState<any>(null);

  const initializeMap = () => {
    const mapContainer = document.getElementById('map'); // 지도를 표시할 div
    const mapOption = {
      center: new window.kakao.maps.LatLng(37.4985163075707, 126.939014238644), // 중심 좌표
      level: 3, // 확대 레벨
    };
    const newMap = new window.kakao.maps.Map(mapContainer, mapOption);
    setMap(newMap);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false&libraries=services`;
    script.onload = () => {
      window.kakao.maps.load(() => {
        initializeMap();
      });
    };
    document.head.appendChild(script);
  }, [apiKey]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (map && window.kakao.maps.services) {
      const keyword = (e.target as any).elements.keyword.value;
      const ps = new window.kakao.maps.services.Places();

      ps.keywordSearch(keyword, (data: any[], status: string) => {
        if (status === window.kakao.maps.services.Status.OK) {
          const bounds = new window.kakao.maps.LatLngBounds();
          data.forEach(place => {
            bounds.extend(new window.kakao.maps.LatLng(place.y, place.x));
          });
          map.setBounds(bounds);

          // 마커 설정
          // data.forEach(place => {
          //   new window.kakao.maps.Marker({
          //     map,
          //     position: new window.kakao.maps.LatLng(place.y, place.x),
          //     title: place.place_name,
          //   });
          // });
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
