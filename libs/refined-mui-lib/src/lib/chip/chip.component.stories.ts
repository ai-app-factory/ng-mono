import type { Meta, StoryObj } from '@storybook/angular';
import { Chip, ChipComponent } from './chip.component';

import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

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
    hideSingleSelectionIndicator: {
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

export const Basic: Story = {
  args: {
    groupLabel: "My favorite Dogs",
    chipType: "basic"
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Shiba Inu")).toBeTruthy();
  }
};

export const WithGroupLabel: Story = {
  args: {
    groupLabel: "My favorite Dogs",
    chipType: "with-input"
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Shiba Inu")).toBeTruthy();
  }
};

export const WithAvatars: Story = {
  args: {
    groupLabel: "My favorite Dogs",
    chipType: "with-input",
    withAvatar: true
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Shiba Inu")).toBeTruthy();
  }
};

export const NotRemovableChips: Story = {
  args: {
    groupLabel: "My favorite Dogs",
    chipType: "with-input",
    withAvatar: true,
    removable: false
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Shiba Inu")).toBeTruthy();
  }
};

export const DisabledChips: Story = {
  args: {
    groupLabel: "My favorite Dogs",
    chipType: "with-input",
    withAvatar: true,
    removable: false,
    disabled: true
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Shiba Inu")).toBeTruthy();
  }
};

export const WithDragDrop: Story = {
  args: {
    groupLabel: "My favorite Dogs",
    chipType: "with-drag-drop",
    withAvatar: true,
    removable: false,
    disabled: true
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Shiba Inu")).toBeTruthy();
  }
};

export const StackedChips: Story = {
  args: {
    groupLabel: "My favorite Dogs",
    chipType: "stacked",
    withAvatar: true,
    removable: false,
    disabled: false,
    chips: [
      { label: 'Shiba Inu', imageSrc: 'https://material.angular.io/assets/img/examples/shiba1.jpg', alt: 'Photo of Shiba Inu' },
      { label: 'Husky', imageSrc: 'https://material.angular.io/assets/img/examples/husky1.jpg', alt: 'Photo of Husky' },
      { label: 'Akita Inu', imageSrc: 'https://material.angular.io/assets/img/examples/akita1.jpg', alt: 'Photo of Akita Inu' },
      { label: 'Golden Retriever', imageSrc: 'https://material.angular.io/assets/img/examples/golden-retriever1.jpg', alt: 'Photo of Golden Retriever' },
      { label: 'Bulldog', imageSrc: 'https://material.angular.io/assets/img/examples/bulldog1.jpg', alt: 'Photo of Bulldog' },
      { label: 'Pug', imageSrc: 'https://material.angular.io/assets/img/examples/pug1.jpg', alt: 'Photo of Pug' },

    ],
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Shiba Inu")).toBeTruthy();
  }
};

export const StackedWithSelectionIndicator: Story = {
  args: {
    groupLabel: "My favorite Dogs",
    chipType: "stacked",
    withAvatar: true,
    removable: false,
    disabled: false,
    hideSingleSelectionIndicator: false
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Shiba Inu")).toBeTruthy();
  }
};

export const SelectionIndicatorHidden: Story = {
  args: {
    groupLabel: "My favorite Dogs",
    chipType: "stacked",
    withAvatar: true,
    removable: false,
    disabled: false,
    hideSingleSelectionIndicator: true
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Shiba Inu")).toBeTruthy();
  }
};

export const WithMultipleSelection: Story = {
  args: {
    groupLabel: "My favorite Dogs",
    chipType: "stacked",
    withAvatar: true,
    removable: false,
    disabled: false,
    hideSingleSelectionIndicator: true,
    multipleSelection: true
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Shiba Inu")).toBeTruthy();
  }
};

export const EditableChipHusky: Story = {
  args: {
    groupLabel: "My favorite Dogs",
    chipType: "with-input",
    withAvatar: true,
    removable: true,
    disabled: false,
    hideSingleSelectionIndicator: true,
    multipleSelection: true,
    editable: true
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    const chip = canvas.getByText('Shiba Inu');
  expect(chip).toBeTruthy();

  // Simulate double-click to edit the chip
  await userEvent.dblClick(chip);

  //

  // Simulate typing the new value
  const input = canvas.getByText('Shiba Inu');
  // Clear the existing value and add Akita Inu
  await userEvent.clear(input);
  await userEvent.type(input, 'Akita Inu');

  // Simulate pressing Enter to save the new value
  await userEvent.keyboard('{Enter}');

  // Verify the updated value
  expect(canvas.getByText('Akita Inu')).toBeTruthy();
  }
};

export const AddMoreChips: Story = {
  args: {
    groupLabel: "My favorite Dogs",
    chipType: "with-input",
    withAvatar: false,
    removable: true,
    disabled: false,
    hideSingleSelectionIndicator: true,
    multipleSelection: true,
    editable: true
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Shiba Inu")).toBeTruthy();
  }
};
