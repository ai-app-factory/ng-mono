import type { Meta, StoryObj } from '@storybook/angular';
import { ChipComponent } from './chip.component';
import { within } from '@storybook/testing-library';

/**
 * This `ChipComponent` is an enhanced version of the Angular Material Chip component.
 * It combines features like drag and drop, editable, and selectable chips with `FormControl`
 * support for reactive forms.
 *
 * It uses a `writeableSignal` to populate the chips.
 */
const meta: Meta<ChipComponent> = {
  component: ChipComponent,
  title: 'ChipComponent',
  argTypes: {
    groupLabel: {
      control: {type: 'text'},
      description: 'The label of the chip group',
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'string' },
      }
    },
    removable: {
      control: {type: 'boolean'},
      description: 'Whether the chips are removable',
      table: {
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      }
    },
    disabled: {
      control: {type: 'boolean'},
      description: 'Whether the chips are disabled',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      }
    },
    selectable: {
      control: {type: 'boolean'},
      description: 'Whether the chips are selectable',
      table: {
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      }
    },
    disableRipple: {
      control: {type: 'boolean'},
      description: 'Whether the chips have ripple effect',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      }
    },
    hideSelectionIndicator: {
      control: {type: 'boolean'},
      description: 'Whether the chips hide the single selection indicator',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      }
    },
    multipleSelection: {
      control: {type: 'boolean'},
      description: 'Whether the chips allow multiple selection',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      }
    },
    chipType: {
      options: ['basic', 'with-drag-drop', 'with-input', 'stacked'],
      control: {type: 'radio' },
      description: 'The type of chips',
      table: {
        defaultValue: { summary: 'basic' },
        type: { summary: 'basic | with-drag-drop | with-input | stacked' },
      }
    },
    editable: {
      control: {type: 'boolean'},
      description: 'Whether the chips are editable',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      }
    },
    withAvatar: {
      control: {type: 'boolean'},
      description: 'Whether the chips have avatars',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      }
    },
    dropListOrientation: {
      options: ['horizontal', 'vertical'],
      control: {type: 'radio' },
      description: 'The orientation of the chips',
      table: {
        defaultValue: { summary: 'horizontal' },
        type: { summary: 'horizontal | vertical' },
      }
    },
    chips: {
      control: {type: 'object'},
      description: 'The chips',
      table: {
        defaultValue: { summary: '[]' },
        type: { summary: 'Chip[]' },
      }
    },
  }
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
  },
};

export const Removeable: Story = {
  args: {
    removable: true
  }
};

export const WithAvatarAndRemovable: Story = {
  args: {
    removable: true,
    withAvatar: true
  }
};

export const WithAvatar: Story = {
  args: {
    removable: false,
    withAvatar: true
  }
};

export const Disabled: Story = {
  args: {
    removable: false,
    withAvatar: true,
    disabled: true
  }
};

export const WithDragAndDrop: Story = {
  args: {
    removable: false,
    withAvatar: true,
    disabled: false,
    chipType: "with-drag-drop"
  }
};

export const Stacked: Story = {
  args: {
    removable: false,
    withAvatar: true,
    disabled: false,
    chipType: "stacked"
  }
};

export const WithInput: Story = {
  args: {
    removable: true,
    withAvatar: false,
    disabled: false,
    chipType: "with-input",
    hideSelectionIndicator: true,
    dropListOrientation: "horizontal"
  }
};

export const Editable: Story = {
  args: {
    removable: true,
    withAvatar: false,
    disabled: false,
    chipType: "with-input",
    hideSelectionIndicator: true,
    dropListOrientation: "horizontal",
    editable: true
  }
};

export const CustomGroupLabel: Story = {
  args: {
    removable: true,
    withAvatar: false,
    disabled: false,
    chipType: "basic",
    hideSelectionIndicator: true,
    dropListOrientation: "horizontal",
    editable: true,
    groupLabel: "My favorite Dogs"
  }
};

export const DisabledRipple: Story = {
  args: {
    removable: true,
    withAvatar: false,
    disabled: false,
    chipType: "basic",
    hideSelectionIndicator: true,
    dropListOrientation: "horizontal",
    editable: true,
    groupLabel: "My favorite Dogs",
    selectable: false,
    disableRipple: true
  }
};
