import type { Meta, StoryObj } from '@storybook/angular';
import { TreeComponent } from './tree.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TreeComponent> = {
  component: TreeComponent,
  title: 'TreeComponent',
};
export default meta;
type Story = StoryObj<TreeComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tree works!/gi)).toBeTruthy();
  },
};
