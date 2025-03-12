import type { Meta, StoryObj } from '@storybook/angular';
import { TimePickerComponent } from './time-picker.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TimePickerComponent> = {
  component: TimePickerComponent,
  title: 'TimePickerComponent',
};
export default meta;
type Story = StoryObj<TimePickerComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/time-picker works!/gi)).toBeTruthy();
  },
};
