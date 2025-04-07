import type { Meta, StoryObj } from '@storybook/angular';
import { ToolTipComponent } from './tool-tip.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ToolTipComponent> = {
  component: ToolTipComponent,
  title: 'ToolTipComponent',
  argTypes: {
    type: {
      control: 'select',
      options: ['Tool-Tip', 'SignPost'],
      description: 'Type of the tool tip',
      table: {
        type: { summary: 'string'},
        defaultValue: { summary: 'Tool-Tip' }, 
        },
      },
    config: {
      control: 'object',
      description: 'Configuration for the tool tip',
      table: {
        type: { summary: 'ToolTipSignPostConfig' },
        defaultValue: { summary: '{ content: "This is a tool tip", position: "top", tooltipSize: "xs", icon: "info-standard", iconSize: "24" }' },
      },
    },
  },

};
export default meta;
type Story = StoryObj<ToolTipComponent>;

export const Default: Story = {
  args: {
    type: 'Tool-Tip',
    config: {
      content: 'This is a tool tip',
      position: 'top-right',
      tooltipSize: 'xs',
      icon: 'info-standard',
      iconSize: '48',
    },
  },
};

export const SignPost: Story = {
  args: {
    type: 'SignPost',
    config: {
      content: 'This is a sign post',
      position: 'right-middle',
      tooltipSize: 'lg',
      icon: 'info-standard',
      iconSize: '48',
    },
  },
};

