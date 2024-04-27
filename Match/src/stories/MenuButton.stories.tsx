import {Story, Meta} from '@storybook/react';
import MenuButton from '../components/menu/menuButton/MenuButton.tsx';
import {MenuButtonProps} from '../components/menu/menuButton/MenuButtonProps.ts';

export default {
  title: 'Components/MenuButton',
  component: MenuButton,
  argTypes: {
    onClick: {action: 'clicked'},
  },
} as Meta;

const Template: Story<MenuButtonProps> = args => <MenuButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click Me!',
  selected: false,
};

export const Selected = Template.bind({});
Selected.args = {
  label: 'Click Me!',
  selected: true,
};
