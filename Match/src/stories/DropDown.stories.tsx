import {Meta, StoryObj} from '@storybook/react';
import DropDown from '../components/dropdown/DropDown';

const meta = {
  title: 'Components/Dropdown',
  component: DropDown,
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    label: '안녕하세요?',
  },
};
