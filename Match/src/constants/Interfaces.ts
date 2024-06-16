export interface LoginProps {
  account: string;
  password: string;
}

export interface SignInProps {
  id: string;
  password: string;
  name: string;
  age: number;
  gender: string;
  loacation: string;
  position: string;
}

export interface PlaceProps {
  id: number;
  name: string;
  address: string;
}

export interface AuthContextType {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  accessToken: string | null;
  setAccessToken: (token: string | null) => void;
  refreshToken: string | null;
  updateAccessToken: (token: string) => void;
  refreshAccessToken: () => Promise<void>;
  logoutHandler: () => void;
}
