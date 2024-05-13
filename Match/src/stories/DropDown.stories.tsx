// Dropdown.stories.tsx
import React from 'react';
import {Meta, Story} from '@storybook/react';
import Dropdown from '@/components/dropdown/DropDown.tsx';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
} as Meta;

const Template: Story<typeof Dropdown> = args => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click to Toggle',
  children: (
    <div>
      Here is some dropdown content. It could be another component or just a
      simple div.
    </div>
  ),
};
