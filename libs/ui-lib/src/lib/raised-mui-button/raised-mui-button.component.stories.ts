import type { Meta, StoryObj } from '@storybook/angular';
import { RaisedMuiButtonComponent } from './raised-mui-button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<RaisedMuiButtonComponent> = {
  component: RaisedMuiButtonComponent,
  title: 'RaisedMuiButtonComponent',
  argTypes: {
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<RaisedMuiButtonComponent>;

export const Primary: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Raised")).toBeTruthy();
  },
};

