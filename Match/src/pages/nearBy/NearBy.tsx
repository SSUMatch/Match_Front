import React, {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import MapComponent from '@/components/map/Map';
import * as S from '@/components/map/Styles';
import {PlacesState} from '@/recoil/place/States';

const NearBy: React.FC = () => {
  const [places, setPlaces] = useRecoilState(PlacesState);
  const navigate = useNavigate();

  const fetchNearbyPlaces = async () => {
    try {
      const response = await axios.post(
        'https://kusitms28.store/places/nearby',
        {
          latitude: 37.4985163075707,
          longitude: 126.939014238644,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.data) {
        setPlaces(response.data);
      } else {
        console.error('Failed to fetch places:', response);
      }
    } catch (error) {
      console.error('Error fetching nearby places:', error);
    }
  };

  useEffect(() => {
    fetchNearbyPlaces();
  }, []);

  return (
    <div>
      <MapComponent />
      <S.PlaceLabel>가장 가까운 구장</S.PlaceLabel>
      <S.PlacesList>
        {places.map(place => (
          <S.PlaceItem key={place.placeId}>
            <S.PlaceDistance>{place.distance}</S.PlaceDistance>
            <S.PlaceName>{place.name}</S.PlaceName>
            <S.MapBtn
              onClick={() => navigate(`/places/${place.placeId}/matches`)}
            >
              매치 정보
            </S.MapBtn>
          </S.PlaceItem>
        ))}
      </S.PlacesList>
    </div>
  );
};

export default NearBy;
