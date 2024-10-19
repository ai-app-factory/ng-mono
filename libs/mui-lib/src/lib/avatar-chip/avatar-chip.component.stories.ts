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
    selectable: {
      control: {
        type: 'boolean',
      },
    },
    selected: {
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

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/avatar-chip works!/gi)).toBeTruthy();
  },
};

export const DisabledChip: Story = {
  args: {
    removable: false,
    selectable: false,
    disabled: true
  }
};

export const NewChipLabel: Story = {
  args: {
    label: "New Chip"
  }
};
