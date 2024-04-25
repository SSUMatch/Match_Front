import { Story, Meta } from "@storybook/react";
import Menu, { Props as MenuProps } from "../components/menu/Menu";

export default {
  title: "Components/Menu",
  component: Menu,
  argTypes: {
    disable: { control: "boolean" },
  },
} as Meta<MenuProps>;

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  disable: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disable: true,
};
