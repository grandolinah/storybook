import React from 'react';
import Button from './Button';
import { action } from '@storybook/addon-actions';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Text = (args) => <Button {...args} onClick={action('clicked')}>Button</Button>;
