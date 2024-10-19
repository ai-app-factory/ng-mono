import type { Meta, StoryObj } from '@storybook/angular';
import { CheckBoxComponent } from './check-box.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CheckBoxComponent> = {
  component: CheckBoxComponent,
  title: 'CheckBoxComponent',
};
export default meta;
type Story = StoryObj<CheckBoxComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/check-box works!/gi)).toBeTruthy();
  },
};
