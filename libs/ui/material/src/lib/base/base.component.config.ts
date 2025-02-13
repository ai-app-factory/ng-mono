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
  color: {
    control: 'color',
    description: 'The color of the component.',
    table: {
      defaultValue: { summary: '#6200ea' },
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
  theme: {
    options: [
      'light',
      'dark',
      'rose-red',
      'pink-bluegrey',
      'cyan-orange',
      'deeppurple-amber',
      'azure-blue',
      'indigo-pink',
      'magenta-violet',
      'purple-green'
    ],
    control: {
      type: 'radio',
    },
    description: 'The theme of the component.',
    table: {
      defaultValue: { summary: 'light' },
      type: { summary: 'string' },
    }
  }
};
