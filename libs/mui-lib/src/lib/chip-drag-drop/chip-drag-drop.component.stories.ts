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
    listOrientation: {
      options: ['horizontal', 'vertical'],
      control: {
        type: 'radio',
      },
    }
  },
};
export default meta;
type Story = StoryObj<ChipDragDropComponent>;

export const Primary: Story = {
  args: {
    items: [
      'Apple',
      'Banana',
      'Grapes',
      'Orange',
      'Pineapple',
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Apple")).toBeTruthy();
  }
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Apple")).toBeTruthy();
  },
};

export const DisabledChipDragDrop: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Apple")).toBeTruthy();
  },
};

export const VerticalChipDragDrop: Story = {
  args: {
    listOrientation: 'vertical',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Apple")).toBeTruthy();
  },
};

export const HorizontalChipDragDrop: Story = {
  args: {
    listOrientation: 'horizontal',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Apple")).toBeTruthy();
  },
};
