import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonToggleComponent } from './button-toggle.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

/**
 * ButtonToggleComponent
 * Displays a toggable array of buttons
 * @class ButtonToggleComponent
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
    options: {
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
  }
};
export default meta;
type Story = StoryObj<ButtonToggleComponent>;

/**
 * Default story for the ButtonToggleComponent
 */
export const Default: Story = {
  args: {
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Select an option')).toBeTruthy();
    expect(canvas.getByText('Bold')).toBeTruthy();
    expect(canvas.getByText('Italic')).toBeTruthy();
    expect(canvas.getByText('Underline')).toBeTruthy();
  },
};

/**
 * Story for the ButtonToggleComponent with options: `['Option 1', 'Option 2', 'Option 3']`
 */
export const WithOptions: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
  },
};

/**
 * Story for vertical ButtonToggleComponent
 * args: ``{ vertical: true }``
 */
export const Vertical: Story = {
  args: {
    vertical: true,
  },
};

/**
 * Story for disabled ButtonToggleComponent
 * args: ``{ disabled: true }``
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

/**
 * Story for disabled interactive ButtonToggleComponent
 * args: ``{
 *    disabled: true,
 *    disabledInteractive: true
 * }``
 */
export const DisabledInteractive: Story = {
  args: {
    disabled: true,
    disabledInteractive: true,
  },
};

/**
 * Story for multiple selection ButtonToggleComponent
 * args: ``{ selection: 'multiple' }``
 */
export const MultipleSelection: Story = {
  args: {
    selection: 'multiple',
  },
};

/**
 * Story where selection indicator is hidden
 * args: ``{ hideSelectionIndicator: true }``
 */
export const HideSelectionIndicator: Story = {
  args: {
    hideSelectionIndicator: true,
  },
};

export const HideSelectedOptions: Story = {
  args: {
    displaySelectedOptions: false,
  },
};

export const WithoutGroupLabel: Story = {
  args: {
    displayGroupLabel: false,
  },
};

export const WithoutGroupLabelAndSelectedOptions: Story = {
  args: {
    displayGroupLabel: false,
    displaySelectedOptions: false,
  },
};

export const WithGroupLabel: Story = {
  args: {
    groupLabel: 'Custom Group Label',
  },
};


export const VerticalSelectionIndicatorHidden: Story = {
  args: {
    vertical: true,
    hideSelectionIndicator: true
  }
};


