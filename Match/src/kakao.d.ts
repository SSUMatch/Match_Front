declare namespace kakao.maps {
  export class Map {
    constructor(container: HTMLElement | null, options: any);
    setCenter(latlng: LatLng): void;
    setBounds(bounds: LatLngBounds): void;
  }

  export class LatLng {
    constructor(latitude: number, longitude: number);
  }

  export class LatLngBounds {
    extend(latlng: LatLng): void;
  }

  export class Marker {
    constructor(options: {map: Map; position: LatLng; title?: string});
  }

  namespace services {
    class Places {
      keywordSearch(
        keyword: string,
        callback: (data: any[], status: any, pagination: any) => void,
      ): void;
    }

    const Status: {
      OK: string;
      ZERO_RESULT: string;
      ERROR: string;
    };
  }
}
