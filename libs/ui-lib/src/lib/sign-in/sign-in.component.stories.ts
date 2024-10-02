import type { Meta, StoryObj } from '@storybook/angular';
import { SignInComponent } from './sign-in.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SignInComponent> = {
  component: SignInComponent,
  title: 'SignInComponent',
};
export default meta;
type Story = StoryObj<SignInComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/sign-in works!/gi)).toBeTruthy();
  },
};
