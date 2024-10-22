import type { Meta, StoryObj } from '@storybook/angular';
import { UserInfoComponent } from './user-info.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<UserInfoComponent> = {
  component: UserInfoComponent,
  title: 'UserInfoComponent',
};
export default meta;
type Story = StoryObj<UserInfoComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/user-info works!/gi)).toBeTruthy();
  },
};
