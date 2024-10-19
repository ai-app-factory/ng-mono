import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarChipComponent } from './avatar-chip.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AvatarChipComponent> = {
  component: AvatarChipComponent,
  title: 'AvatarChipComponent',
  argTypes: {
    avatar: {
      control: {
        type: 'text',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    removable: {
      control: {
        type: 'boolean',
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
type Story = StoryObj<AvatarChipComponent>;

export const Primary: Story = {
  args: {},
};


export const DisabledChip: Story = {
  args: {
    removable: false,
    disabled: true
  }
};

export const NewChipLabel: Story = {
  args: {
    label: "New Chip"
  }
};
