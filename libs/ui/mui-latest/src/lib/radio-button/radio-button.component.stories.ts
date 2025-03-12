import type { Meta, StoryObj } from '@storybook/angular';
import { RadioButtonComponent } from './radio-button.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<RadioButtonComponent> = {
  component: RadioButtonComponent,
  title: 'RadioButtonComponent',
};
export default meta;
type Story = StoryObj<RadioButtonComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/radio-button works!/gi)).toBeTruthy();
  },
};
