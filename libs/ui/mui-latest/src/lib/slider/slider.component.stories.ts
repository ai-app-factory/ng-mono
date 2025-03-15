import type { Meta, StoryObj } from '@storybook/angular';
import { SliderComponent } from './slider.component';
import { within } from '@storybook/testing-library';

/**
 * `SliderComponent` is an enhanced mui-slider component which can be used as
 * a simple slider or a range slider.
 * Use `sliderType` to select the different types of sliders.
 *
 */
const meta: Meta<SliderComponent> = {
  component: SliderComponent,
  title: 'SliderComponent',
  argTypes: {
    sliderType: {
      options: ['basic', 'range'],
      control: {
        type: 'select'
      },
      description: 'The type of slider to render.',
      table: {
        defaultValue: { summary: 'basic' },
        type: { summary: 'basic | range' },
      }
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the slider is disabled.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    sliderLabel: {
      control: {
        type: 'text',
      },
      description: 'The label to display above the slider.',
      table: {
        defaultValue: { summary: 'Select a value' },
        type: { summary: 'string' },
      },
    },
    min: {
      control: {
        type: 'number',
      },
      description: 'The minimum value of the slider.',
      table: {
        defaultValue: { summary: '0' },
        type: { summary: 'number' },
      },
    },
    max: {
      control: {
        type: 'number',
      },
      description: 'The maximum value of the slider.',
      table: {
        defaultValue: { summary: '100' },
        type: { summary: 'number' },
      },
    },
    step: {
      control: {
        type: 'number',
      },
      description: 'The step value of the slider.',
      table: {
        defaultValue: { summary: '1' },
        type: { summary: 'number' },
      },
    },
    thumbLabel: {
      control: {
        type: 'boolean',
      },
      description: 'Whether to display the value label on the thumb.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    discrete: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the slider is discrete.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    showSliderValues: {
      control: {
        type: 'boolean',
      },
      description: 'Whether to display the slider values.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    displayLabel: {
      control: {
        type: 'boolean',
      },
      description: 'Whether to display the slider label.',
      table: {
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      },
    },
    showTicks: {
      control: {
        type: 'boolean',
      },
      description: 'Whether to display the slider ticks.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
  }
};
export default meta;
type Story = StoryObj<SliderComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};

export const BasicSlider: Story = {
  args: {
    sliderType: 'basic',
  },
};

export const RangeSlider: Story = {
  args: {
    sliderType: 'range',
    showSliderValues: true,
  },
};

export const DisabledSlider: Story = {
  args: {
    disabled: true,
  },
};

export const DiscreteSlider: Story = {
  args: {
    discrete: true,
    step: 10,
  },
};

export const ShowTicks: Story = {
  args: {
    showTicks: true,
    max: 1000,
    step: 20
  },
};

export const ThumbLabel: Story = {
  args: {
    thumbLabel: true,
  },
};

export const StartValue100EndValue10000: Story = {
  args: {
    sliderType: 'range',
    min: 100,
    max: 10000,
    showSliderValues: true,
    discrete: true,
  },
};
