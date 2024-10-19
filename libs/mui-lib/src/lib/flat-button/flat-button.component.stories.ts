import type { Meta, StoryObj } from '@storybook/angular';
import { FlatButtonComponent } from './flat-button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<FlatButtonComponent> = {
  component: FlatButtonComponent,
  title: 'FlatButtonComponent',
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<FlatButtonComponent>;

export const Primary: Story = {

  args: {
    label: 'Button Text',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Button Text')).toBeTruthy();
  },
};

export const Disabled: Story = {

  args: {
    label: 'Button Text',
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Button Text')).toBeTruthy();
  },
};

export const CustomLabel: Story = {
  args: {
    label: 'Custom Button Text',
    disabled: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Custom Button Text')).toBeTruthy();
  },
};
