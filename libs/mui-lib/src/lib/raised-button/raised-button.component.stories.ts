import type { Meta, StoryObj } from '@storybook/angular';
import { RaisedButtonComponent } from './raised-button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<RaisedButtonComponent> = {
  component: RaisedButtonComponent,
  title: 'RaisedButtonComponent',
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<RaisedButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Raised Button',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Raised Button")).toBeTruthy();
  },
};

export const Disabled: Story = {
  args: {
    label: 'Raised Button',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Raised Button")).toBeTruthy();
  },
};

export const CustomLabel: Story = {
  args: {
    label: 'Custom Raised Button',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Custom Raised Button")).toBeTruthy();
  },
};
