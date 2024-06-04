interface Kakao {
  maps: {
    load: (callback: () => void) => void;
    LatLng: new (latitude: number, longitude: number) => any;
    Map: new (container: HTMLElement | null, options: any) => any;
    LatLngBounds: new () => any;
    services: {
      Places: new () => {
        keywordSearch: (
          query: string,
          callback: (data: any[], status: string) => void,
        ) => void;
      };
      Status: {
        OK: string;
      };
    };
  };
}

interface Window {
  kakao: Kakao;
}
