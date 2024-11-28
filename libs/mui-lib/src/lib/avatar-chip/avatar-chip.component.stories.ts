import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarChipComponent } from './avatar-chip.component';


const meta: Meta<AvatarChipComponent> = {
  component: AvatarChipComponent,
  title: 'AvatarChipComponent',
  argTypes: {
    removable: {
      table: {
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
      description: 'Whether the chip is removable'
    },
    disabled: {
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
      description: 'Whether the chip is disabled'
    },
    avatarChips: {
      control: {
        type: 'object'
      }
    }
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
    avatarChips: [
      {
        label: "New Label One",
        avatarUrl: "https://material.angular.io/assets/img/examples/shiba1.jpg"
      },
      {
        label: "new label two",
        avatarUrl: "https://material.angular.io/assets/img/examples/shiba1.jpg"
      }
    ]
  }
};
