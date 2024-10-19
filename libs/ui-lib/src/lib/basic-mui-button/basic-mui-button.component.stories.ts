import type { Meta, StoryObj } from '@storybook/angular';
import { BasicMuiButtonComponent } from './basic-mui-button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<BasicMuiButtonComponent> = {
  component: BasicMuiButtonComponent,
  title: 'BasicMuiButtonComponent',
  argTypes: {
    disabled: { control: 'boolean' },
    label: { control: 'text' }
  },
};
export default meta;
type Story = StoryObj<BasicMuiButtonComponent>;

export const Primary: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Basic")).toBeTruthy();
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Basic")).toBeTruthy();
  },
};

export const Enabled: Story = {
  args: {
    disabled: false
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Basic")).toBeTruthy();
  }
};



export const NewLabel: Story = {
  args: {
    label: "new label"
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("new label")).toBeTruthy();
  }
};
