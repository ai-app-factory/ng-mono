import type { Meta, StoryObj } from '@storybook/angular';
import { ToolTipComponent } from './tool-tip.component';

import { within } from '@storybook/testing-library';
import { TemplateRef } from '@angular/core';

/**
 * `ToolTipComponent` which enhances Material `ToolTipModule`
 */
const meta: Meta<ToolTipComponent> = {
  component: ToolTipComponent,
  title: 'ToolTipComponent',
  argTypes: {
    toolLabel: {
      control: { type: 'text' },
      description: 'The label of the tool',
      table: {
        defaultValue: { summary: 'Tool' },
        type: { summary: 'string' },
      },
    },
    tip: {
      control: { type: 'text' },
      description: 'The tip to display',
      table: {
        defaultValue: { summary: 'Tip about how to use the tool' },
        type: { summary: 'string' },
      },
    },
    position: {
      options: [
        'above',
        'below',
        'before',
        'after',
        'left',
        'right'
      ],
      control: { type: 'select' },
      description: 'The position of the tooltip',
      table: {
        defaultValue: { summary: 'below' },
        type: { summary: 'above | below | before | after | left | right' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the tooltip is disabled',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      }
    },
    showDelay: {
      control: { type: 'number' },
      description: 'The delay before showing the tooltip in milliseconds',
      table: {
        defaultValue: { summary: '1000' },
        type: { summary: 'number' },
      }
    },
    hideDelay: {
      control: { type: 'number' },
      description: 'The delay before hiding the tooltip in milliseconds',
      table: {
        defaultValue: { summary: '2000' },
        type: { summary: 'number' },
      }
    },
    template: {
      control: { type: 'object' },
      description: 'The template to display in the tooltip',
      table: {
        defaultValue: { summary: 'undefined' },
        type: { summary: 'TemplateRef<any>' },
      }
    },
  }
};
export default meta;
type Story = StoryObj<ToolTipComponent>;

export const Primary: Story = {
  args: {
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const TipAboveTool: Story = {
  args: {
    position: 'above',
    showDelay: 500,
  },
};

export const TipBelowTool: Story = {
  args: {
    position: 'below',
    showDelay: 500,
  },
};

export const TipBeforeTool: Story = {
  args: {
    position: 'before',
    showDelay: 500,
  },
};

export const TipAfterTool: Story = {
  args: {
    position: 'after',
    showDelay: 500,
  },
};

export const TipLeftTool: Story = {
  args: {
    position: 'left',
    showDelay: 500,
  },
};

export const TipRightTool: Story = {
  args: {
    position: 'right',
    showDelay: 500,
  },
};

export const CustomTip: Story = {
  args: {
    tip: 'Custom tip',
  },
};

export const CustomToolLabel: Story = {
  args: {
    toolLabel: 'Custom tool',
  },
};

export const ShowDelayOf3Seconds: Story = {
  args: {
    showDelay: 3000,
  },
};

export const HideDelayOf3Seconds: Story = {
  args: {
    hideDelay: 3000,
  },
};


// export const CustomComponentTip: Story = {
//   args: {
//     tip: 'Custom tooltip text',
//     position: 'above',
//     showDelay: 500,
//     hideDelay: 1500,
//     disabled: false,
//   },
//   render: (args) => ({
//     props: args,
//     template: `
//       <lib-tool-tip
//         [tip]="tip"
//         [position]="position"
//         [showDelay]="showDelay"
//         [hideDelay]="hideDelay"
//         [disabled]="disabled"
//         [template]="customTip"
//       ></lib-tool-tip>
//       <ng-template #customTip>
//         <div
//           matTooltip="{{tip}}"
//           [matTooltipPosition]="position"
//           [matTooltipShowDelay]="showDelay"
//           [matTooltipHideDelay]="hideDelay"
//           [matTooltipDisabled]="disabled"
//         >
//           Custom content with tooltip
//         </div>
//       </ng-template>
//     `,
//   }),
// };
