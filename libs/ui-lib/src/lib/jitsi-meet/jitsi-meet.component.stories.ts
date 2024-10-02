import type { Meta, StoryObj } from '@storybook/angular';
import { JitsiMeetComponent } from './jitsi-meet.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<JitsiMeetComponent> = {
  component: JitsiMeetComponent,
  title: 'JitsiMeetComponent',
};
export default meta;
type Story = StoryObj<JitsiMeetComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/jitsi-meet works!/gi)).toBeTruthy();
  },
};
