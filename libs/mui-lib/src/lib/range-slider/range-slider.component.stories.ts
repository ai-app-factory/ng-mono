import type { Meta, StoryObj } from '@storybook/angular';
import { RangeSliderComponent } from './range-slider.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<RangeSliderComponent> = {
  component: RangeSliderComponent,
  title: 'RangeSliderComponent',
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    max: {
      control: 'number',
    },
    min: {
      control: 'number',
    },
    showTicks: {
      control: 'boolean',
    },
    step: {
      control: 'number',
    },
    thumbLabel: {
      control: 'boolean',
    },
    startValue: {
      control: 'number',
    },
    endValue: {
      control: 'number',
    },
  },
};
export default meta;
type Story = StoryObj<RangeSliderComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/range-slider works!/gi)).toBeTruthy();
  },
};

export const DisabledRangeSlider: Story = {
  args: {
    disabled: true
  }
};

export const Min10Max1000: Story = {
  args: {
    disabled: false,
    max: 1000,
    min: 10
  }
};

export const WithThumbLabel: Story = {
  args: {
    disabled: false,
    max: 1000,
    min: 10,
    showTicks: false,
    thumbLabel: true
  }
};

export const WithTicks: Story = {
  args: {
    disabled: false,
    max: 10000,
    min: 10,
    showTicks: true,
    thumbLabel: false
  }
};
