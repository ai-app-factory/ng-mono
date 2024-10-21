import type { Meta, StoryObj } from '@storybook/angular';
import { ProgressBarComponent } from './progress-bar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProgressBarComponent> = {
  component: ProgressBarComponent,
  title: 'ProgressBarComponent',
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 10
      },
    },
    bufferValue: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 10
      },
    },
    mode: {
      options: ['determinate', 'indeterminate', 'query', 'buffer'],
      control: {
        type: 'radio',
      },
    },
  },
};
export default meta;
type Story = StoryObj<ProgressBarComponent>;


export const Primary: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('progressbar')).toBeTruthy();
  },
};

export const Indeterminate: Story = {
  args: {
    mode: 'indeterminate',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('progressbar')).toBeTruthy();
  },
};

export const Determinate: Story = {
  args: {
    mode: 'determinate',
    value: 50,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('progressbar')).toBeTruthy();
  },
};

export const Buffer: Story = {
  args: {
    mode: 'buffer',
    value: 50,
    bufferValue: 75,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('progressbar')).toBeTruthy();
    const progressBar = canvas.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '50');
    expect(progressBar).toHaveAttribute('aria-valuemax', '75');
  },
};

export const Query: Story = {
  args: {
    mode: 'query',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('progressbar')).toBeTruthy();
  },
};
