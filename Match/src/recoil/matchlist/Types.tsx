export interface PlayerRecord {
  num: number;
  goal: number;
  assist: number;
  defense: number;
}

export interface QuarterRecord {
  quarter: string;
  goal: number;
  assist: number;
  defense: number;
  team1: string;
  team2: string;
  team1Goal: number;
  team2Goal: number;
  team1Record: PlayerRecord[];
  team2Record: PlayerRecord[];
}

export interface TeamMember {
  userId: number;
  color: string;
  name: string;
  age: number;
  location: string;
}

export interface GameData {
  isWin: boolean;
  date: string;
  place: string;
  type: string;
  isPom: boolean;
  point: number;
  num: number;
  color: string;
  quarterRecords: QuarterRecord[];
  redTeam: TeamMember[];
  greenTeam: TeamMember[];
  blueTeam: TeamMember[];
}
