import type { Meta, StoryObj } from '@storybook/angular';
import { UiLibComponent } from './ui-lib.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UiLibComponent> = {
  component: UiLibComponent,
  title: 'UiLibComponent',
};
export default meta;
type Story = StoryObj<UiLibComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/ui-lib works!/gi)).toBeTruthy();
  },
};
