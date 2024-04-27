import {Story, Meta} from '@storybook/react';
import MatchList from '../components/match/matchlist/MatchList.tsx';
import {MatchListProps} from '../components/match/matchlist/MatchListProps';

export default {
  title: 'Components/MatchList',
  component: MatchList,
} as Meta;

const Template: Story<MatchListProps> = args => <MatchList {...args} />;

export const Default = Template.bind({});
Default.args = {
  time: '20:00',
  location: '숭실대학교 풋살 구장 A',
  title: '남성 6vs6 랭크 매치 (프로)',
};
