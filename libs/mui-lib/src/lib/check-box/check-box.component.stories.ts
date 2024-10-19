import type { Meta, StoryObj } from '@storybook/angular';
import { CheckBoxComponent } from './check-box.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CheckBoxComponent> = {
  component: CheckBoxComponent,
  title: 'CheckBoxComponent',
};
export default meta;
type Story = StoryObj<CheckBoxComponent>;

export const Primary: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Task 1")).toBeTruthy();
  },
};

export const DisabledCheckbox: Story = {
  args: {
    disabled: true,
    task: { name: 'Task 1', completed: false },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Task 1")).toBeTruthy();
  },

};

export const CheckedCheckbox: Story = {
  args: {
    checked: true,
    task: { name: 'Task 1', completed: true },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Task 1")).toBeTruthy();
  },
};

export const DisabledAndCheckedCheckbox: Story = {
  args: {
    checked: true,
    disabled: true,
    task: { name: 'Task 1', completed: true },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Task 1")).toBeTruthy();
  },
};

export const CheckboxWithSubtasks: Story = {
  args: {
    task: {
      name: 'Task 1',
      completed: false,
      subtasks: [
        { name: 'Subtask 1', completed: false },
        { name: 'Subtask 2', completed: true },
      ],
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Task 1")).toBeTruthy();
    expect(canvas.getByText("Subtask 1")).toBeTruthy();
    expect(canvas.getByText("Subtask 2")).toBeTruthy();
  },
};
