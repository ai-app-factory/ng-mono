import { ArgTypes } from '@storybook/angular';

export const baseComponentArgs: ArgTypes = {
  typography: {
    options: ['h1', 'h2', 'h3', 'h4', 'p'],
    control: {
      type: 'radio',
    },
    description: 'The typography of the component.',
    table: {
      defaultValue: { summary: 'paragraph' },
      type: { summary: 'string' },
    }
  },
  shape: {
    options: ['rounded', 'square', 'pill'],
    control: {
      type: 'radio',
    },
    description: 'The shape of the component.',
    table: {
      defaultValue: { summary: 'rounded' },
      type: { summary: 'string' },
    }
  },
  size: {
    control: {
      type: 'number',
    },
    description: 'The size of the component.',
    table: {
      defaultValue: { summary: '16' },
      type: { summary: 'number' },
    }
  },
};
