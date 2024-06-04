export interface Record {
  score: number;
  participant: number;
  victory: number;
  goal: number;
  assist: number;
  defence: number;
  pom: number;
}

export interface User {
  userId: number;
  name: string;
  age: number;
  image: string;
  description: string;
  number: string;
  grade: string;
  location: string;
  teamName: string | null;
  record: Record;
}
