import type { Meta, StoryObj } from '@storybook/angular';
import { ToolBarComponent } from './tool-bar.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ToolBarComponent> = {
  component: ToolBarComponent,
  title: 'ToolBarComponent',
};
export default meta;
type Story = StoryObj<ToolBarComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tool-bar works!/gi)).toBeTruthy();
  },
};
