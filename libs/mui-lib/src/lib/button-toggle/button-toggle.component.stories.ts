import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonToggleComponent } from './button-toggle.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ButtonToggleComponent> = {
  component: ButtonToggleComponent,
  title: 'ButtonToggleComponent',
  argTypes: {
    groupLabel: {
      control: {
        type: 'text',
      },
      defaultValue: 'Select an option',
    },
    selection: {

        options: ['single', 'multiple'],
        control: {
          type: 'radio',
        },
    },
    options: {
      control: {
        type: 'object',
      },
      defaultValue: ['Bold', 'Italic', 'Underline'],
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    value: {
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
    hideSelectionIndicator: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
};
export default meta;
type Story = StoryObj<ButtonToggleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
};
