import type { Meta, StoryObj } from '@storybook/angular';
import { ToolTipComponent } from './tool-tip.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ToolTipComponent> = {
  component: ToolTipComponent,
  title: 'ToolTipComponent',
};
export default meta;
type Story = StoryObj<ToolTipComponent>;

export const Primary: Story = {
  args: {
    tool: 'Tool',
    tip: 'Tip about how to use the tool',
    position: 'below',
    disabled: false,
    showDelay: 1000,
    hideDelay: 10000,
  },
};

export const Heading: Story = {
  args: {
    tool: 'Tool',
    tip: 'Tip about how to use the tool',
    position: 'below',
    disabled: false,
    showDelay: 1000,
    hideDelay: 10000,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tool-tip works!/gi)).toBeTruthy();
  },
};
