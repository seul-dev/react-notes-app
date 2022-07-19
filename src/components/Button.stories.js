import Button from './Button';

export default {
  title: 'MyComponents/Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'object' },
  },
};

const Template = (args) => <Button {...args} />;

export const GrayButton = Template.bind({});

GrayButton.args = {
  text: 'Back',
  color: 'gray',
  label: 'Button',
};

export const RedButton = Template.bind({});

RedButton.args = {
  text: 'Remove',
  color: 'red',
  label: 'Button',
};

export const BlueButton = Template.bind({});

BlueButton.args = {
  text: 'Create Note',
  color: 'blue',
  label: 'Button',
};
