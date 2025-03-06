import type { Meta, StoryObj } from '@storybook/angular';
import { BaseComponent } from './base.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<BaseComponent> = {
  component: BaseComponent,
  title: 'BaseComponent',
};
export default meta;
type Story = StoryObj<BaseComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/base works!/gi)).toBeTruthy();
  },
};
