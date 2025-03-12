import type { Meta, StoryObj } from '@storybook/angular';
import { ProgressIndicatorComponent } from './progress-indicator.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ProgressIndicatorComponent> = {
  component: ProgressIndicatorComponent,
  title: 'ProgressIndicatorComponent',
};
export default meta;
type Story = StoryObj<ProgressIndicatorComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/progress-indicator works!/gi)).toBeTruthy();
  },
};
