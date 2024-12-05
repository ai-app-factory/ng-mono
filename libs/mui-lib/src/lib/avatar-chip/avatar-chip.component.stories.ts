import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarChipComponent } from './avatar-chip.component';


const meta: Meta<AvatarChipComponent> = {
  component: AvatarChipComponent,
  title: 'AvatarChipComponent',
  argTypes: {
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
    avatarChips: {
      control: {
        type: 'object'
      }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio'
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
