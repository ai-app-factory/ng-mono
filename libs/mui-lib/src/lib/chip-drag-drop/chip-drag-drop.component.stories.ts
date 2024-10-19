import type { Meta, StoryObj } from '@storybook/angular';
import { ChipDragDropComponent } from './chip-drag-drop.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ChipDragDropComponent> = {
  component: ChipDragDropComponent,
  title: 'ChipDragDropComponent',
  argTypes: {
    items: {
      control: {
        type: 'object',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};
export default meta;
type Story = StoryObj<ChipDragDropComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Apple")).toBeTruthy();
  },
};
