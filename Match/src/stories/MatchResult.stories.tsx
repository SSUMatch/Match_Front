import {ComponentStory, ComponentMeta} from '@storybook/react';
import MatchResult from '@/components/matchResult/MatchResult.tsx';

// Storybook 메타 정보 설정
export default {
  title: 'Components/MatchResult',
  component: MatchResult,
  argTypes: {
    date: {control: 'text'},
    place: {control: 'text'},
    details: {control: 'text'},
    result: {control: 'text'},
    points: {control: 'number'},
  },
} as ComponentMeta<typeof MatchResult>;

// 컴포넌트 템플릿 생성
const Template: ComponentStory<typeof MatchResult> = args => (
  <MatchResult {...args} />
);

// 기본 스토리 설정
export const Default = Template.bind({});
Default.args = {
  date: '2024년 5월 1일 수요일 20:00',
  place: '서울 숭실대학교 풋살 구장 A',
  details: '남성 6vs6 랭크 매치 (프로)',
  result: 'POM 😎',
  points: 20,
};
