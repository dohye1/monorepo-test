import IconButton from './IconButton';
import { Story, Meta } from '@storybook/react';
import { IconButtonProps } from './IconButton.types';
import { ActionAddIcon } from '@parte/icons';

export default {
  title: 'Components/Buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    viewport: 'responsive',
  },
} as Meta;

const Template: Story<IconButtonProps> = ({ ...args }) => {
  return <IconButton {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
  size: 32,
  Icon: <ActionAddIcon />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  Icon: <ActionAddIcon />,
  size: 32,
};

export const Minimal = Template.bind({});
Minimal.args = {
  variant: 'minimal',
  Icon: <ActionAddIcon />,
  size: 32,
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  Icon: <ActionAddIcon />,
  size: 32,
};
