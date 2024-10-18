import type { Meta, StoryObj } from '@storybook/angular';
import { MatButtonComponent } from './mat-button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<MatButtonComponent> = {
  component: MatButtonComponent,
  title: 'MatButtonComponent',
};
export default meta;
type Story = StoryObj<MatButtonComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/mat-button works!/gi)).toBeTruthy();
  },
};
