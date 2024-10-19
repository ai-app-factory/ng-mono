import type { Meta, StoryObj } from '@storybook/angular';
import { ChipComponent } from './chip.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ChipComponent> = {
  component: ChipComponent,
  title: 'ChipComponent',
  argTypes: {
    labels: {
      control: {
        type: 'text',
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
type Story = StoryObj<ChipComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/chip works!/gi)).toBeTruthy();
  },
};

export const DisabledChip: Story = {
  args: {
    disabled: true
  }
};

