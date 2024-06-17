import {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import axios from 'axios';
import MapComponent from '@/components/map/Map';
import * as S from '@/components/map/Styles';
import {PlacesState} from '@/recoil/place/States';

const NearBy = () => {
  const [places, setPlaces] = useRecoilState(PlacesState);

  const fetchNearbyPlaces = async () => {
    try {
      const response = await axios.post(
        'https://kusitms28.store/places/nearby',
        {
          latitude: 37.4985163075707,
          longitude: 126.939014238644,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.data.code === '200' && response.data.isSuccess) {
        setPlaces(response.data.data);
      } else {
        console.error('Failed to fetch places:', response.data.message);
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
      <button onClick={fetchNearbyPlaces}>출력</button>
      <S.PlacesList>
        {places.map((place, index) => (
          <S.PlaceItem key={index}>
            <S.PlaceName>{place.name}</S.PlaceName>
            <S.PlaceDistance>{place.distance}</S.PlaceDistance>
          </S.PlaceItem>
        ))}
      </S.PlacesList>
    </div>
  );
};

export default NearBy;
