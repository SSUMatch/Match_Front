import React from 'react';
import {Meta, Story} from '@storybook/react';
import {RecoilRoot, useRecoilState} from 'recoil';
import MatchList from '@/components/matchList/MatchList';
import {
  gameDataState,
  selectedQuarterState,
  selectedTeamState,
} from '@/recoil/matchlist/States';
import {GameData} from '@/recoil/matchlist/Types';

const mockedGameData: GameData = {
  isWin: true,
  date: '2023년 6월 1일 (목) 오전 12:00',
  place: '숭실대학교 풋살 구장 A',
  type: '남성 6 vs 6 일반매치',
  isPom: true,
  point: 20,
  num: 2,
  color: 'RED',
  quarterRecords: [
    {
      quarter: '1쿼터',
      goal: 15,
      assist: 9,
      defense: 8,
      team1: 'RED',
      team2: 'GREEN',
      team1Goal: 19,
      team2Goal: 18,
      team1Record: [
        {num: 1, goal: 4, assist: 2, defense: 5},
        {num: 2, goal: 3, assist: 2, defense: 1},
        {num: 3, goal: 4, assist: 1, defense: 1},
        {num: 4, goal: 4, assist: 4, defense: 4},
        {num: 5, goal: 2, assist: 1, defense: 1},
        {num: 6, goal: 2, assist: 1, defense: 3},
      ],
      team2Record: [
        {num: 13, goal: 5, assist: 1, defense: 5},
        {num: 14, goal: 3, assist: 5, defense: 4},
        {num: 15, goal: 2, assist: 4, defense: 5},
        {num: 16, goal: 4, assist: 2, defense: 3},
        {num: 17, goal: 3, assist: 2, defense: 5},
        {num: 18, goal: 1, assist: 3, defense: 1},
      ],
    },
    {
      quarter: '2쿼터',
      goal: 15,
      assist: 9,
      defense: 8,
      team1: 'RED',
      team2: 'BLUE',
      team1Goal: 22,
      team2Goal: 21,
      team1Record: [
        {num: 1, goal: 5, assist: 2, defense: 5},
        {num: 2, goal: 4, assist: 2, defense: 3},
        {num: 3, goal: 5, assist: 4, defense: 3},
        {num: 4, goal: 4, assist: 5, defense: 4},
        {num: 5, goal: 2, assist: 5, defense: 1},
        {num: 6, goal: 2, assist: 5, defense: 5},
      ],
      team2Record: [
        {num: 7, goal: 5, assist: 2, defense: 4},
        {num: 8, goal: 5, assist: 1, defense: 4},
        {num: 9, goal: 2, assist: 1, defense: 5},
        {num: 10, goal: 1, assist: 4, defense: 2},
        {num: 11, goal: 4, assist: 1, defense: 3},
        {num: 12, goal: 4, assist: 4, defense: 2},
      ],
    },
  ],
  redTeam: [
    {
      userId: 1,
      color: 'RED',
      name: 'John',
      age: 25,
      location: 'Location 1',
    },
    {
      userId: 2,
      color: 'RED',
      name: 'David',
      age: 28,
      location: 'Location 2',
    },
    {
      userId: 3,
      color: 'RED',
      name: 'James',
      age: 30,
      location: 'Location 3',
    },
    {
      userId: 4,
      color: 'RED',
      name: 'Mark',
      age: 27,
      location: 'Location 4',
    },
    {
      userId: 5,
      color: 'RED',
      name: 'Paul',
      age: 26,
      location: 'Location 5',
    },
    {
      userId: 6,
      color: 'RED',
      name: 'Andrew',
      age: 29,
      location: 'Location 6',
    },
  ],
  greenTeam: [
    {
      userId: 13,
      color: 'GREEN',
      name: 'Timothy',
      age: 36,
      location: 'Location 13',
    },
    {
      userId: 14,
      color: 'GREEN',
      name: 'Jason',
      age: 37,
      location: 'Location 14',
    },
    {
      userId: 15,
      color: 'GREEN',
      name: 'Jeffrey',
      age: 38,
      location: 'Location 15',
    },
    {
      userId: 16,
      color: 'GREEN',
      name: 'Ryan',
      age: 39,
      location: 'Location 16',
    },
    {
      userId: 17,
      color: 'GREEN',
      name: 'Jacob',
      age: 40,
      location: 'Location 17',
    },
    {
      userId: 18,
      color: 'GREEN',
      name: 'Gary',
      age: 41,
      location: 'Location 18',
    },
  ],
  blueTeam: [
    {
      userId: 7,
      color: 'BLUE',
      name: 'Scott',
      age: 31,
      location: 'Location 7',
    },
    {
      userId: 8,
      color: 'BLUE',
      name: 'Eric',
      age: 24,
      location: 'Location 8',
    },
    {
      userId: 9,
      color: 'BLUE',
      name: 'Stephen',
      age: 33,
      location: 'Location 9',
    },
    {
      userId: 10,
      color: 'BLUE',
      name: 'Kevin',
      age: 32,
      location: 'Location 10',
    },
    {
      userId: 11,
      color: 'BLUE',
      name: 'Brian',
      age: 34,
      location: 'Location 11',
    },
    {
      userId: 12,
      color: 'BLUE',
      name: 'Edward',
      age: 35,
      location: 'Location 12',
    },
  ],
};

export default {
  title: 'Example/MatchList',
  component: MatchList,
  decorators: [
    Story => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} as Meta;

const Template: Story = args => {
  const [gameData, setGameData] = useRecoilState(gameDataState);
  const [, setSelectedQuarter] = useRecoilState(selectedQuarterState);
  const [, setSelectedTeam] = useRecoilState(selectedTeamState);

  React.useEffect(() => {
    setGameData(mockedGameData);
    setSelectedQuarter(mockedGameData.quarterRecords[0].quarter);
    setSelectedTeam('RED');
  }, [setGameData, setSelectedQuarter, setSelectedTeam]);

  return <MatchList {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
