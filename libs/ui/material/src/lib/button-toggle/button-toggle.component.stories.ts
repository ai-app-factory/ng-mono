import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonToggleComponent } from './button-toggle.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

/**
 * `ButtonToggleComponent` is a component that displays a toggable array of buttons
 */
const meta: Meta<ButtonToggleComponent> = {
  component: ButtonToggleComponent,
  title: 'ButtonToggleComponent',
  argTypes: {
    displayGroupLabel: {
      control: {
        type: 'boolean',
      },
      description: 'Whether to display the group label',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
        }
      },
    },
    displaySelectedOptions: {
      control: {
        type: 'boolean',
      },
      description: 'Whether to display the selected options',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'true',
        }
      },
    },
    groupLabel: {
      control: {
        type: 'text',
      },
      description: 'The group label',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'Select an option',
        }
      },
    },
    selection: {
      options: ['single', 'multiple'],
      control: {
        type: 'radio',
      },
      description: 'The selection type',
      table: {
        type: {
          summary: 'single | multiple',
        },
        defaultValue: {
          summary: 'single',
        }
      },
    },
    buttonToggleLabels: {
      control: {
        type: 'object',
      },
      description: 'The options to display in the button toggle',
      table: {
        type: {
          summary: 'string[]',
        },
        defaultValue: {
          summary: '["Bold", "Italic", "Underline"]',
        }
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the button toggle is disabled',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        }
      },
    },
    hideSelectionIndicator: {
      control: {
        type: 'boolean',
      },
      description: 'Whether to hide the selection indicator',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        }
      },
    },
    vertical: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the button toggle is vertical',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        }
      },
    },
    disabledInteractive: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the button toggle is interactive when disabled',
      table: {
        type: {
          summary: 'boolean',
        },
        defaultValue: {
          summary: 'false',
        }
      },
    },
    valueChange: {
      description: 'Emits the value of the button toggle when it changes',
      table: {
        type: {
          summary: 'EventEmitter<string>',
        },
      },
    },
    color: {
      control: {
        type: 'color',
      },
      description: 'The color of the button toggle',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: '#000000',
        }
      },
    },
    typography: {
      options: [ 'heading1', 'heading2', 'paragraph' ],
      control: {
        type: 'radio',
      },
      description: 'The typography of the button toggle',
      table: {
        type: {
          summary: 'string',
        },
        defaultValue: {
          summary: 'paragraph',
        }
      },
    },
    size: {
      control: {
        type: 'number',
      },
      description: 'The size of the button toggle',
      table: {
        type: {
          summary: 'number',
        },
        defaultValue: {
          summary: '16',
        }
      },
    }
  }
};
export default meta;
type Story = StoryObj<ButtonToggleComponent>;

export const Primary: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Vertical: Story = {
  args: {
    vertical: true,
  },
};

export const MultipleSelection: Story = {
  args: {
    selection: 'multiple',
  },
};

export const HideSelectionIndicator: Story = {
  args: {
    hideSelectionIndicator: true,
  },
};

export const DisabledInteractive: Story = {
  args: {
    disabledInteractive: true,
  },
};

export const CustomLabels: Story = {
  args: {
    buttonToggleLabels: ['One', 'Two', 'Three'],
    color: "#ca9191",
    size: 30
  },
};

export const NoGroupLabel: Story = {
  args: {
    displayGroupLabel: false,
  },
};

export const NoSelectedOptions: Story = {
  args: {
    displaySelectedOptions: false,
  },
};









