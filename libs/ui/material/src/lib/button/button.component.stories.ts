import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

/**
 * `ButtonComponent` is a custom button component that can be used in Angular applications.
 * Use `buttonType` to select the different types of buttons.
 *
 */
const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      description: 'The text to display on the button.',
      table: {
        defaultValue: { summary: 'Button Text' },
        type: { summary: 'string' },
      }
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the button is disabled.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      }
    },
    disabledInteractive: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the button is interactive when disabled.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      }
    },
    disableRipple: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the button has a ripple effect.',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      }
    },
    buttonType: {
      options: [
        'mat-raised-button',
        'mat-fab',
        'mat-button',
        'mat-flat-button',
        'mat-stroked-button',
        'mat-mini-fab',
        'mat-icon-button',
        'mat-menu-item',
        'extended-fab',
        'web-filled-button',
        'web-outlined-button',
        'web-toned-button',
      ],
      control: {
        type: 'radio'
      },
      description: 'The type of button to display.',
      table: {
        defaultValue: { summary: 'mat-raised-button' },
        type: { summary: 'string' },
      }
    },
    icon: {
      control: {
        type: 'text',
      },
      description: 'The icon to display on the button.',
      table: {
        defaultValue: { summary: 'home' },
        type: { summary: 'string' },
      }
    },
    shape: {
      options: ['rounded', 'square', 'pill'],
      control: {
        type: 'radio',

      },
      description: 'The shape of the button.',
      table: {
        defaultValue: { summary: 'rounded' },
        type: { summary: 'string' },
      }
    },
    color: {
      options: ['primary', 'accent', 'warn'],
      control: {
        type: 'radio',
      },
      description: 'The color of the button.',
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' },
      }
    },
    typography: {
      options: ['body1', 'body2', 'button'],
      control: {
        type: 'radio',
      },
      description: 'The typography of the button.',
      table: {
        defaultValue: { summary: 'button' },
        type: { summary: 'string' },
      }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio',
      },
      description: 'The size of the button.',
      table: {
        defaultValue: { summary: 'medium' },
        type: { summary: 'string' },
      }
    },
  }
};
export default meta;
type Story = StoryObj<ButtonComponent>;

/**
 * Primary Button Story
 */
export const Primary: Story = {
  args: {},
};

/**
 * Story to display a disabled button
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

/**
 * Story to display an icon button
 */
export const IconButton: Story = {
  args: {
    icon: 'home',
    buttonType: 'mat-icon-button',
  },
};

/**
 * Story to display a button with a custom color
 */
export const CustomColor: Story = {
  args: {
    color: 'accent',
  },
};

/**
 * Story to display a button with a Pill shape
 */
export const PillShape: Story = {
  args: {
    shape: 'pill',
  },
};

/**
 * Story to display a button with square shape
 */
export const SquareShape: Story = {
  args: {
    shape: 'square',
  },
};

/**
 * Story to display a button with a custom label
 */
export const CustomLabel: Story = {
  args: {
    label: 'this is the label text',
  },
};

/**
 * Story to display a flat button
 */
export const FlatButton: Story = {
  args: {
    buttonType: 'mat-flat-button',
  },
};



/**
 * Story to display a button with a small size
 */
export const SmallSize: Story = {
  args: {
    size: 'small',
  },
};

/**
 * Story to display a button with a large size
 */
export const LargeSize: Story = {
  args: {
    size: 'large',
  },
};

/**
 * Story to display a button with a body1 typography
 */
export const Body1Typography: Story = {
  args: {
    typography: 'body1',
  },

};

/**
 * Story to display a button with a body2 typography
 */
export const Body2Typography: Story = {
  args: {
    typography: 'body2',
  },

};

/**
 * Story to display a button with a button typography
 */
export const ButtonTypography: Story = {
  args: {
    typography: 'button',
  },
};

/**
 * Story to display a stroked button
 */
export const StrokedButton: Story = {
  args: {
    buttonType: 'mat-stroked-button',
  },
};

/**
 * Story to display a mini fab button
 */
export const MiniFabButton: Story = {
  args: {
    buttonType: 'mat-mini-fab',
    shape: "rounded",
    color: "primary",
    size: "small"
  },
};

/**
 * Story to display a fab button
 */
export const FabButton: Story = {
  args: {
    buttonType: 'mat-fab',
  },
};

/**
 * Story to display a normal button
 */
export const NormalButton: Story = {
  args: {
    buttonType: 'mat-button',
  },
};

/**
 * Story to display a web filled button
 */
export const WebFilledButton: Story = {
  args: {
    buttonType: 'web-filled-button',
  },
};

/**
 * Story to display a web outlined button
 */
export const WebOutlinedButton: Story = {
  args: {
    buttonType: 'web-outlined-button',
  },
};

/**
 * Story to display a web toned button
 */
export const WebTonedButton: Story = {
  args: {
    buttonType: 'web-toned-button',
  },
};

/**
 * Story to display an extended fab button
 */
export const ExtendedFabButton: Story = {
  args: {
    buttonType: 'extended-fab',
    icon: 'settings',
  },
};

/**
 * Story to display a menu item button
 */
export const MenuItemButton: Story = {
  args: {
    buttonType: 'mat-menu-item',
    icon: 'home',
  },
};

/**
 * Story to display a raised button
 */
export const RaisedButton: Story = {
  args: {
    buttonType: 'mat-raised-button',
  },
};

/**
 * Story to display a button with disabled interactive
 */
export const DisabledInteractiveButton: Story = {
  args: {
    disabledInteractive: true,
    disabled: true,
  },
};

/**
 * Story to display a button with disabled ripple
 */
export const DisabledRippleButton: Story = {
  args: {
    disableRipple: true,
  },
};

/**
 * Story to display a button with a custom icon
 */
export const CustomIcon: Story = {
  args: {
    icon: 'settings',
    buttonType: 'mat-icon-button'
  },
};


