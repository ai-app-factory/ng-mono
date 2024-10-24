import type { Meta, StoryObj } from '@storybook/angular';
import { ChipComponent } from './chip.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ChipComponent> = {
  component: ChipComponent,
  title: 'ChipComponent',
  argTypes: {
    keywords: {
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
type Story = StoryObj<ChipComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  
};

export const DisabledChip: Story = {
  args: {
    disabled: true
  }
};

