import type { Meta, StoryObj } from '@storybook/angular';
import { RadioButtonComponent } from './radio-button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<RadioButtonComponent> = {
  component: RadioButtonComponent,
  title: 'RadioButtonComponent',
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};
export default meta;
type Story = StoryObj<RadioButtonComponent>;

export const Primary: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Option 1')).toBeTruthy();
  },
};

export const CustomLabels: Story = {
  args: {
    
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Option 1")).toBeTruthy();
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Option 1")).toBeTruthy();
  }
};
