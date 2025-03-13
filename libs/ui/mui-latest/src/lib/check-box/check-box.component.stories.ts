import type { Meta, StoryObj } from '@storybook/angular';
import { CheckBoxComponent } from './check-box.component';
import { within } from '@storybook/testing-library';

/**
 * The `CheckBoxComponent` is a component that displays a list of tasks with checkboxes.
 * This is the enhanced version of the Angular Material Checkbox.
 */
const meta: Meta<CheckBoxComponent> = {
  component: CheckBoxComponent,
  title: 'CheckBoxComponent',
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' }
      },
    },
    labelPosition: {
      options: ['before', 'after'],
      control: { type: 'radio' },
      description: 'Whether the label should appear after or before the checkbox.',
      table: {
        defaultValue: { summary: 'after' },
        type: { summary: 'before | after' }
      },
    },
    displayGroupLabel: {
      control: 'boolean',
      description: 'Whether the group label should be displayed.',
      table: {
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' }
      },
    },
    groupLabel: {
      control: 'text',
      description: 'The group label.',
      table: {
        defaultValue: { summary: 'To do list' },
        type: { summary: 'string' }
      },
    },
    disableRipple: {
      control: 'boolean',
      description: 'Whether the ripple effect should be disabled.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' }
      },
    },
    disabledInteractive: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled and not interactive.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' }
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the checkbox is required.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' }
      },
    },
    indeterminate: {
      control: 'boolean',
      description: 'Whether the checkbox is indeterminate.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' }
      },
    },
    tasks: {
      control: 'object',
      description: 'The list of tasks to display.',
      table: {
        type: { summary: 'Task[]' }
      },
    }
  }
};
export default meta;
type Story = StoryObj<CheckBoxComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};

export const LabelPositionBefore: Story = {
  args: {
    labelPosition: "before"
  }
};

export const WithoutGroupLabel: Story = {
  args: {
    labelPosition: "before",
    displayGroupLabel: false
  }
};

export const AllDisabled: Story = {
  args: {
    labelPosition: "after",
    displayGroupLabel: false,
    disabled: true
  }
};

export const DisabledInteractive: Story = {
  args: {
    labelPosition: "after",
    displayGroupLabel: true,
    disabled: true,
    disabledInteractive: true
  }
};

export const RippleDisabled: Story = {
  args: {
    labelPosition: "after",
    displayGroupLabel: true,
    disabled: false,
    disabledInteractive: true,
    disableRipple: true
  }
};
