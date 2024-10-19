import type { Meta, StoryObj } from '@storybook/angular';
import { SlideToggleComponent } from './slide-toggle.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SlideToggleComponent> = {
  component: SlideToggleComponent,
  title: 'SlideToggleComponent',
  argTypes: {
    label: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<SlideToggleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/slide-toggle works!/gi)).toBeTruthy();
  },
};

export const DisabledToggle: Story = {
  args: {
    disabled: true
  }
};

export const CheckedDisabledToggle: Story = {
  args: {
    disabled: true,
    checked: true
  }
};

export const NewLabelForToggle: Story = {
  args: {
    disabled: true,
    checked: true,
    label: "New Label for Toggle"
  }
};
