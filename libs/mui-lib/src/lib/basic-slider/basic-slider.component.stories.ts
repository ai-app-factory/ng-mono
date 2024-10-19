import type { Meta, StoryObj } from '@storybook/angular';
import { BasicSliderComponent } from './basic-slider.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<BasicSliderComponent> = {
  component: BasicSliderComponent,
  title: 'BasicSliderComponent',
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
    value: {
      control: 'number',
    },
  },
};
export default meta;
type Story = StoryObj<BasicSliderComponent>;

export const Primary: Story = {
  args: {
    label: 'Basic Slider',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Basic Slider")).toBeTruthy();
  },
};

export const Heading: Story = {
  args: {},

};

export const DisabledSlider: Story = {
  args: {
    disabled: true
  }
};

export const MaxValue1000: Story = {
  args: {
    label: "Basic Slider",
    max: 1000
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Basic Slider")).toBeTruthy();
  }
};

export const MinValue50: Story = {
  args: {
    label: "Basic Slider",
    max: 1000,
    min: 50
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Basic Slider")).toBeTruthy();
  }
};

export const SliderStepWith10: Story = {
  args: {
    label: "Basic Slider",
    max: 1000,
    min: 50,
    step: 10
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Basic Slider")).toBeTruthy();
  }
};

export const SliderWithThumbLabel: Story = {
  args: {
    label: "Basic Slider",
    max: 1000,
    min: 50,
    step: 10,
    thumbLabel: true
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Basic Slider")).toBeTruthy();
  }
};

export const SliderWithTicks: Story = {
  args: {
    label: "Basic Slider",
    max: 1000,
    min: 50,
    step: 10,
    thumbLabel: true,
    showTicks: true
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Basic Slider")).toBeTruthy();
  }
};
