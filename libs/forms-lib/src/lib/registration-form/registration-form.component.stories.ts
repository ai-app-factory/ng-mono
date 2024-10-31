import type { Meta, StoryObj } from '@storybook/angular';
import { RegistrationFormComponent } from './registration-form.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<RegistrationFormComponent> = {
  component: RegistrationFormComponent,
  title: 'RegistrationFormComponent',
};
export default meta;
type Story = StoryObj<RegistrationFormComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/registration-form works!/gi)).toBeTruthy();
  },
};
