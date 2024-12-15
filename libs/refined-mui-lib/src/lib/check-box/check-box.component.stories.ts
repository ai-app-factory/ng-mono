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
      description: 'Whether the checkbox is indeterminate.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' }
      },
    },
  },
};
export default meta;
type Story = StoryObj<CheckBoxComponent>;


export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Option 1")).toBeTruthy();
  },
};

export const Checked: Story = {
  args: {

    tasks: [{
      name: 'Option 1',
      checked: true
    }],

  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Option 1")).toBeTruthy();
  },
};

export const Unchecked: Story = {
  args: {

    tasks: [{
      name: 'Option 1',
      checked: false
    }],

  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Option 1")).toBeTruthy();
  },
};

export const Disabled: Story = {
  args: {

    tasks: [{
      name: 'Option 1',
      checked: false
    }],
    disabled: true

  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Option 1")).toBeTruthy();
  },
};

export const CheckedDisabled: Story = {
  args: {

    tasks: [{
      name: 'Option 1',
      checked: true
    }],
    disabled: true

  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Option 1")).toBeTruthy();
  },
};

export const Indeterminate: Story = {
  args: {

    tasks: [{
      name: 'Option 1',
      checked: false,
      subtasks: [
        { name: 'Subtask 1', checked: false },
        { name: 'Subtask 2', checked: true }
      ]

    }],


  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Option 1")).toBeTruthy();
  },
};

export const IndeterminateDisabled: Story = {
  args: {

    tasks: [{
      name: 'Option 1',
      checked: false,
      subtasks: [
        { name: 'Subtask 1', checked: false },
        { name: 'Subtask 2', checked: true }
      ]

    }],
    disabled: true

  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Option 1")).toBeTruthy();
  },
};

export const Required: Story = {
  args: {

    tasks: [{
      name: 'Option 1',
      checked: false
    }],
    required: true

  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Option 1")).toBeTruthy();
  },
};

export const DisabledRipple: Story = {
  args: {

    tasks: [{
      name: 'Option 1',
      checked: false
    }],
    disableRipple: true

  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Option 1")).toBeTruthy();
  },
};

export const DisabledInteractive: Story = {
  args: {

    tasks: [{
      name: 'Option 1',
      checked: false
    }],
    disabledInteractive: true,
    disabled: true

  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Option 1")).toBeTruthy();
  },
};

export const CustomGroupLabel: Story = {
  args: {

    tasks: [{
      name: 'Option 1',
      checked: false
    }],
    groupLabel: 'Group Label'

  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Group Label")).toBeTruthy();
  },
};

export const NoGroupLabel: Story = {
  args: {

    tasks: [{
      name: 'Option 1',
      checked: false
    }],
    displayGroupLabel: false

  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.queryByText("To do list")).toBeNull();
  },
};

export const BeforeLabel: Story = {
  args: {

    tasks: [{
      name: 'Option 1',
      checked: false,
      subtasks: [
        { name: 'Subtask 1', checked: false },
        { name: 'Subtask 2', checked: true }
      ]
    }],
    labelPosition: 'before'

  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Option 1")).toBeTruthy();
  },
};

export const HideSelected: Story = {
  args: {

    tasks: [{
      name: 'Option 1',
      checked: false
    }],
    showSelected: false

  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Option 1")).toBeTruthy();
  },
};
