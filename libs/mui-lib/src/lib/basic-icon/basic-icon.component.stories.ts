import type { Meta, StoryObj } from '@storybook/angular';
import { BasicIconComponent } from './basic-icon.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<BasicIconComponent> = {
  component: BasicIconComponent,
  title: 'BasicIconComponent',
};
export default meta;
type Story = StoryObj<BasicIconComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/basic-icon works!/gi)).toBeTruthy();
  },
};
