import type { Meta, StoryObj } from '@storybook/angular';
import { MuiLibComponent } from './mui-lib.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<MuiLibComponent> = {
  component: MuiLibComponent,
  title: 'MuiLibComponent',
};
export default meta;
type Story = StoryObj<MuiLibComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/mui-lib works!/gi)).toBeTruthy();
  },
};
