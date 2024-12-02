import type { Meta, StoryObj } from '@storybook/angular';
import { SliderComponent } from './slider.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SliderComponent> = {
  component: SliderComponent,
  title: 'SliderComponent',
  argTypes: {
    sliderType: {
      options: ['basic', 'range'],
      control: { type: 'radio' },
      description: 'Type of slider',
      table: {
        defaultValue: { summary: 'basic' },
        type: { summary: 'basic | ranged' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the slider',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    max: {
      control: { type: 'number' },
      description: 'Maximum value of the slider',
      table: {
        defaultValue: { summary: '100' },
        type: { summary: 'number' },
      },
    },
    min: {
      control: { type: 'number' },
      description: 'Minimum value of the slider',
      table: {
        defaultValue: { summary: '0' },
        type: { summary: 'number' },
      },
    },
    showTicks: {
      control: { type: 'boolean' },
      description: 'Show ticks on the slider',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    step: {
      control: { type: 'number' },
      description: 'Step value of the slider',
      table: {
        defaultValue: { summary: '1' },
        type: { summary: 'number' },
      },
    },
    thumbLabel: {
      control: { type: 'boolean' },
      description: 'Show thumb label',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    discrete: {
      control: { type: 'boolean' },
      description: 'Discrete slider',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    label: {
      control: { type: 'text' },
      description: 'Label of the slider',
      table: {
        defaultValue: { summary: 'Slider' },
        type: { summary: 'string' },
      },
    },
    showSliderValues: {
      control: { type: 'boolean' },
      description: 'Show slider values',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    displayLabel: {
      control: { type: 'boolean' },
      description: 'Display label',
      table: {
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      },
    },
  }
};
export default meta;
type Story = StoryObj<SliderComponent>;

export const Primary: Story = {
  args: {
    sliderType: 'basic',
    disabled: false,
    max: 100,
    min: 0,
    showTicks: false,
    step: 1,
    thumbLabel: false,
    discrete: false,
    label: 'Slider',
    showSliderValues: false,
    displayLabel: true,
  },
};

export const Heading: Story = {
  args: {
    sliderType: 'basic',
    disabled: false,
    max: 100,
    min: 0,
    showTicks: false,
    step: 1,
    thumbLabel: false,
    discrete: false,
    label: 'Slider',
    showSliderValues: false,
    displayLabel: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/slider works!/gi)).toBeTruthy();
  },
};
