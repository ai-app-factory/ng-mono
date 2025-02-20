import { ArgTypes } from '@storybook/angular';

export const baseComponentArgs: ArgTypes = {
  typography: {
    options: ['heading1', 'heading2', 'paragraph'],
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
      defaultValue: { summary: '14' },
      type: { summary: 'number' },
    }
  },
  disabled: {
    control: {
      type: 'boolean',
    },
    description: 'Whether the component is disabled.',
    table: {
      defaultValue: { summary: 'false' },
      type: { summary: 'boolean' },
    }
  },
};
