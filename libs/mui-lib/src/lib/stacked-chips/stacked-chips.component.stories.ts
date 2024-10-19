import type { Meta, StoryObj } from '@storybook/angular';
import { StackedChipsComponent } from './stacked-chips.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<StackedChipsComponent> = {
  component: StackedChipsComponent,
  title: 'StackedChipsComponent',
};
export default meta;
type Story = StoryObj<StackedChipsComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/stacked-chips works!/gi)).toBeTruthy();
  },
};
