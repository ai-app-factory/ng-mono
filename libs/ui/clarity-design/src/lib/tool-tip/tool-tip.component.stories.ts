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

export const TootTip: Story = {
  args: {
    type: 'Tool-Tip',
    config: {
      content: 'This is a tool tip',
      position: 'bottom',
      tooltipSize: 'xs',
      icon: 'info-standard',
      iconSize: '24',
    },
  },
};

export const ToolTipWithDifferentIcon: Story = {
  args: {
    type: 'Tool-Tip',
    config: {
      content: 'This is a tool tip with a different icon',
      position: 'top',
      tooltipSize: 'sm',
      icon: 'alarm-clock',
      iconSize: '24',
    },
  },
};

export const ToolTipWithDifferentPosition: Story = {
  args: {
    type: 'Tool-Tip',
    config: {
      content: 'This is a tool tip at the top-right position',
      position: 'top-right',
      tooltipSize: 'lg',
      iconSize: '24',
    },
  },
};

export const ToolTipWithDifferentSize: Story = {
  args: {
    type: 'Tool-Tip',
    config: {
      content: 'This is a tool tip with a larger size',
      position: 'bottom',
      tooltipSize: 'lg',
      icon: 'info-standard',
      iconSize: '24',
    },
  },
};

export const SignPost: Story = {
  args: {
    type: 'SignPost',
    config: {
      content: 'This is a sign post',
      position: 'bottom-left',
      tooltipSize: 'lg',
      icon: 'user',
      iconSize: '30',
    },
  },
};

export const SignPostWithDifferentIcon: Story = {
  args: {
    type: 'SignPost',
    config: {
      content: 'This is a sign post with a different icon',
      position: 'top-left',
      icon: 'airplane',
      iconSize: '30',
    },
  },
};


export const SignPostWithTitle: Story = {
  args: {
    type: 'SignPost',
    config: {
      title: 'Sign Post Title',
      content: 'This is a sign post with a title',
      position: 'right-middle',
      tooltipSize: 'lg',
      icon: 'alarm-clock',
      iconSize: '30',
    },
  },
};

export const SignPostWithDifferentPosition: Story = {
  args: {
    type: 'SignPost',
    config: {
      content: 'This is a sign post at the top-right position',
      position: 'top-right',
      icon: 'airplane',
      iconSize: '30',
    },
  },
};

export const SignPostWithLongContent: Story = {
  args: {
    type: 'SignPost',
    config: {
      content: 'This is a sign post with a very long content that should be truncated or wrapped depending on the tooltip size and position.',
      position: 'bottom-right',
      tooltipSize: 'lg',
      icon: 'user',
      iconSize: '30',
    },
  },
};