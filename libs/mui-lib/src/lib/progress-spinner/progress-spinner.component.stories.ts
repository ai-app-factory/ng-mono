import type { Meta, StoryObj } from '@storybook/angular';
import { ProgressSpinnerComponent } from './progress-spinner.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProgressSpinnerComponent> = {
  component: ProgressSpinnerComponent,
  title: 'ProgressSpinnerComponent',
  argTypes: {
    diameter: {
      control: {
        type: 'number',
      },
    },
    strokeWidth: {
      control: {
        type: 'number',
      },
    },
    mode: {
      options: ['determinate', 'indeterminate'],
      control: {
        type: 'radio',
      },
    },
    value: {
      control: {
        type: 'range',
        min: 0,
        max:100,
        step: 10
      },
    },
  },
};
export default meta;
type Story = StoryObj<ProgressSpinnerComponent>;


export const Primary: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('progressbar')).toBeTruthy();
  },
};

export const SmallSpinner: Story = {
  args: {
    diameter: 20, // Example property for size
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('progressbar')).toBeTruthy();
  },
};

export const DeterminateSpinner: Story = {
  args: {
    // Example property for mode
    mode: 'determinate',

    // Example property for value
    value: 50,

    diameter: 10,
    strokeWidth: 5
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('progressbar')).toBeTruthy();
  },
};
