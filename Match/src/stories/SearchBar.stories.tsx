import {Story, Meta} from '@storybook/react';
import SearchBar from '../components/searchbar/SearchBar';

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
} as Meta;

const Template: Story = args => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithText = Template.bind({});
WithText.args = {
  // 이 예제에서는 초기 state를 설정할 방법이 없기 때문에 `value`를 직접 조작하는 것은 불가능합니다.
  // 대신, placeholder 혹은 다른 props를 조정하여 다양한 상태를 시뮬레이션할 수 있습니다.
};
