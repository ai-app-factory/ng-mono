import type { Meta, StoryObj } from '@storybook/angular';
import { CheckBoxComponent } from './check-box.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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
      description: 'Whether the checkbox is in an indeterminate state.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' }
      },
    },
    showSelected: {
      control: 'boolean',
      description: 'Whether the selected items should be displayed.',
      table: {
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' }
      },
    },
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
    expect(canvas.getByText('To do list')).toBeVisible();
  },
};
