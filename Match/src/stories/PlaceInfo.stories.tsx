import {Meta, Story} from '@storybook/react';
import PlaceInfo from '@/components/dropdown/placeinfo/PlaceInfo';

export default {
  title: 'Components/PlaceInfo',
  component: PlaceInfo,
} as Meta;

const Template: Story = args => <PlaceInfo {...args} />;

export const Default = Template.bind({});
Default.args = {};
