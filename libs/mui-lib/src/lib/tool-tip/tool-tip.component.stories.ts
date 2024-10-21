import type { Meta, StoryObj } from '@storybook/angular';
import { ToolTipComponent } from './tool-tip.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ToolTipComponent> = {
  component: ToolTipComponent,
  title: 'ToolTipComponent',
  argTypes: {
    tool: {
      control: { type: 'text' },
    },
    tip: {
      control: { type: 'text' },
    },
    position: {
      control: { type: 'select' },
      options: ['above', 'below', 'before', 'after', 'left', 'right'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    showDelay: {
      control: { type: 'number' },
    },
    hideDelay: {
      control: { type: 'number' },
    },
  },
};
export default meta;
type Story = StoryObj<ToolTipComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    position: "left",
    disabled: true
  }
};

export const LeftPositonTip: Story = {
  args: {
    position: "left",
    disabled: false
  }
};

export const RightPositionTip: Story = {
  args: {
    position: "right",
    disabled: false
  }
};

export const TipAboveTool: Story = {
  args: {
    position: "above",
    disabled: false
  }
};

export const ShowDelay2Seconds: Story = {
  args: {
    position: "above",
    disabled: false,
    showDelay: 2000
  }
};

export const HideDelay5Seconds: Story = {
  args: {
    position: "above",
    disabled: false,
    showDelay: 2000,
    hideDelay: 5000
  }
};
