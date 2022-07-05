import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    title: {
      defaultValue: 'Button',
      description: '`string`',
      type: { name: 'string', required: true },
      control: {
        type: 'text',
      },
    },
    variant: {
      defaultValue: 'primary',
      control: {
        type: 'select',
        options: [
          'info',
          'link',
          'primary',
          'primary-bordered',
          'secondary',
          'secondary-bordered',
          'success',
          'success-bordered',
          'warning',
          'warning-bordered',
          'disabled',
        ],
      },
    },
    size: {
      defaultValue: 'base',
      control: {
        type: 'select',
        options: ['sm', 'base', 'lg'],
      },
    },
    fullWidth: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const title = Template.bind({});
title.args = {
  title: 'Button',
};

export const size = Template.bind({});
size.args = {
  size: 'lg',
};

export const variant = Template.bind({});
variant.args = {
  variant: 'primary',
};
