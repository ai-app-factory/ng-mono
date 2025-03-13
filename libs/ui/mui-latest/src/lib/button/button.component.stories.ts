import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { baseComponentArgs } from '../base/base.component.args';
/**
 * `ButtonComponent` is an enhanced mui-button component
 * that can be used in Angular applications.
 * Use `buttonType` to select the different types of buttons.
 */
const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
  argTypes: {
    ...baseComponentArgs,
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
    buttonType: {
      options: [
        'basic',
        'raised',
        'fab',
        'mini-fab',
        'stroked',
        'flat',
        'icon',
        'extended-fab',
      ],
      control: {
        type: 'select',
      },
      description: 'The type of button to display.',
      table: {
        defaultValue: { summary: 'raised' },
        type: { summary: 'string' },
      }
    }
  }
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};

export const WithH1Typography: Story = {
  args: {
    typography: "h1"
  }
};

export const RoundedCorners: Story = {
  args: {
    typography: "p",
    shape: "rounded"
  }
};

export const SquareShaped: Story = {
  args: {
    typography: "p",
    shape: "square"
  }
};

export const PillShaped: Story = {
  args: {
    typography: "p",
    shape: "pill"
  }
};

export const Size40: Story = {
  args: {
    typography: "p",
    shape: "pill",
    size: 40
  }
};

export const CustomButtonLabel: Story = {
  args: {
    typography: "p",
    shape: "pill",
    size: 16,
    label: "New Button"
  }
};

export const Disabled: Story = {
  args: {
    typography: "p",
    shape: "pill",
    size: 16,
    label: "New Button",
    disabled: true
  }
};

export const DisabledInteractive: Story = {
  args: {
    typography: "p",
    shape: "pill",
    size: 16,
    label: "New Button",
    disabled: true,
    disabledInteractive: true
  }
};

export const RippleDisabled: Story = {
  args: {
    typography: "p",
    shape: "pill",
    size: 16,
    label: "New Button",
    disabled: false,
    disabledInteractive: true,
    disableRipple: true
  }
};

export const BasicButtonType: Story = {
  args: {
    typography: "p",
    shape: "pill",
    size: 16,
    label: "New Button",
    disabled: false,
    disabledInteractive: true,
    disableRipple: true,
    buttonType: "basic"
  }
};

export const FloatingActionButton: Story = {
  args: {
    typography: "p",
    shape: "pill",
    size: 16,
    label: "New Button",
    disabled: false,
    disabledInteractive: true,
    disableRipple: true,
    buttonType: "fab"
  }
};

export const MiniFloatingActionButton: Story = {
  args: {
    typography: "p",
    shape: "pill",
    size: 0,
    label: "New Button",
    disabled: false,
    disabledInteractive: true,
    disableRipple: true,
    buttonType: "mini-fab"
  }
};

export const StrokedButton: Story = {
  args: {
    typography: "p",
    shape: "pill",
    size: 16,
    label: "New Button",
    disabled: false,
    disabledInteractive: true,
    disableRipple: true,
    buttonType: "stroked"
  }
};

export const FlatButton: Story = {
  args: {
    typography: "p",
    shape: "pill",
    size: 16,
    label: "New Button",
    disabled: false,
    disabledInteractive: true,
    disableRipple: true,
    buttonType: "flat"
  }
};

export const ExtendedFloatingActionButton: Story = {
  args: {
    typography: "p",
    shape: "pill",
    size: 16,
    label: "home",
    disabled: false,
    disabledInteractive: true,
    disableRipple: true,
    buttonType: "extended-fab"
  }
};

export const CustomIconMenu: Story = {
  args: {
    typography: "p",
    shape: "pill",
    size: 16,
    label: "home",
    disabled: false,
    disabledInteractive: true,
    disableRipple: true,
    buttonType: "icon",
    icon: "menu"
  }
};

export const WithH3Typography: Story = {
  args: {
    typography: "h3",
    shape: "pill",
    size: 16,
    label: "home",
    disabled: false,
    disabledInteractive: true,
    disableRipple: true,
    buttonType: "flat",
    icon: "menu"
  }
};
