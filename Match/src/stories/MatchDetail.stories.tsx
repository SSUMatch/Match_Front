import {ComponentStory, ComponentMeta} from '@storybook/react';
import MatchDetail from '@/components/matchDetail/matchDetail';

export default {
  title: 'Components/MatchDetail',
  component: MatchDetail,
  argTypes: {
    date: {control: 'text'},
    placeName: {control: 'text'},
    location: {control: 'text'},
    price: {control: 'number'},
  },
} as ComponentMeta<typeof MatchDetail>;

const Template: ComponentStory<typeof MatchDetail> = args => (
  <MatchDetail {...args} />
);

export const Default = Template.bind({});
Default.args = {
  date: '2024-05-14',
  placeName: '서울 월드컵 경기장',
  location: '서울특별시 마포구 성산동 515',
  price: 10000,
};

export const Favorited = Template.bind({});
Favorited.args = {
  ...Default.args,
};

Favorited.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);
  const favoriteButton = await canvas.getByRole('button', {name: /즐겨찾기/i});
  await userEvent.click(favoriteButton);
};
