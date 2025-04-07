import type { Meta, StoryObj } from '@storybook/angular';
import { TimelineComponent } from './timeline.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TimelineComponent> = {
  component: TimelineComponent,
  title: 'TimelineComponent',
};
export default meta;
type Story = StoryObj<TimelineComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/timeline works!/gi)).toBeTruthy();
  },
};
