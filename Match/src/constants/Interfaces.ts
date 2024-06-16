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
