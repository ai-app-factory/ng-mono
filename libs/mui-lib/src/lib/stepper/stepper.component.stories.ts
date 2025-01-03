import type { Meta, StoryObj } from '@storybook/angular';
import { StepperComponent } from './stepper.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { table } from 'console';

const meta: Meta<StepperComponent> = {
  component: StepperComponent,
  title: 'StepperComponent',
  argTypes: {
    labelPosition: {
      control: 'radio',
      options: ['bottom', 'end'],
      description: 'The position of the label',
      table: {
        type: { summary: 'bottom | end' },
        defaultValue: { summary: 'end' },
      },
    },
    headerPosition: {
      control: 'radio',
      options: ['top', 'bottom'],
      description: 'The position of the header',
      table: {
        type: { summary: 'top | bottom' },
        defaultValue: { summary: 'top' },
      },
    },
    editable: {
      control: 'boolean',
      description: 'Editable',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    orientation: {
      control: 'radio',
      options: ['vertical', 'horizontal'],
      description: 'The orientation of the stepper',
      table: {
        type: { summary: 'vertical | horizontal' },
        defaultValue: { summary: 'horizontal' },
      },
    },
    linear: {
      control: 'boolean',
      description: 'Linear stepper',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    disableRipple: {
      control: 'boolean',
      description: 'Disable ripple effect',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    questions: {
      description: 'Questions for the stepper',
      table: {
        type: { summary: 'Question[]' },
        defaultValue: { summary: '[]' },
      },
      control: {
        type: 'object',
      },
      properties: {
        label: {
          control: 'text'
        },
        placeholder: {
          control: 'text'
        },
        required: {
          control: 'boolean'
        },
        errorMessage: {
          control: 'text'
        }
      },
    },
  },
};
export default meta;
type Story = StoryObj<StepperComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
};
