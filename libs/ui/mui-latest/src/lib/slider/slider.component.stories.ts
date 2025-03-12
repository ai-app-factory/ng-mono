import type { Meta, StoryObj } from '@storybook/angular';
import { SliderComponent } from './slider.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SliderComponent> = {
  component: SliderComponent,
  title: 'SliderComponent',
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
    expect(canvas.getByText(/slider works!/gi)).toBeTruthy();
  },
};
