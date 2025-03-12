import type { Meta, StoryObj } from '@storybook/angular';
import { SnackBarComponent } from './snack-bar.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SnackBarComponent> = {
  component: SnackBarComponent,
  title: 'SnackBarComponent',
};
export default meta;
type Story = StoryObj<SnackBarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/snack-bar works!/gi)).toBeTruthy();
  },
};
