import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent, ButtonType } from './button.component';



const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
  argTypes: {
    label: {
      table: {
        defaultValue: { summary: 'Click me' },
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
      description: 'The label of the button',

    },
    disabled: {
      table: {
        defaultValue: { summary: 'False' },
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
      description: 'Whether the button is disabled'
    },
    size: {
      table: {
        defaultValue: { summary: '5' },
        type: { summary: 'string' },
      },
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      },
      description: 'The size of the button'
    },
    buttonType: {
      table: {
        defaultValue: { summary: 'ButtonType.Raised' },
        type: { summary: 'ButtonType' },
      },
      options: [
        ButtonType.RAISED,
        ButtonType.FAB,
        ButtonType.BUTTON,
        ButtonType.FLAT,
        ButtonType.STROKED,
        ButtonType.MINI_FAB,
        ButtonType.ICON
      ],
      control: {
        type: 'radio',
      },
      description: 'The type of button'
    },
    disabledInteractive: {
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
      description: 'Whether the button is interactive when disabled'
    },
    disableRipple: {
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
      description: 'Whether the ripple effect is disabled'
    },
  },
  args: {
    label: 'Click me',
    disabled: false,
    buttonType: ButtonType.RAISED,
    size: 5,
  }
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const CustomLabel: Story = {
  args: {
    disabled: false,
    label: "this is the label text"
  }
};

export const FabButton: Story = {
  args: {
    disabled: false,
    buttonType: ButtonType.FAB
  }
};

export const FlatButton: Story = {
  args: {
    disabled: false,
    buttonType: ButtonType.FLAT
  }
};

export const StrokedButton: Story = {
  args: {
    disabled: false,
    buttonType: ButtonType.STROKED
  }
};

export const NormalButton: Story = {
  args: {
    disabled: false,
    buttonType: ButtonType.BUTTON
  }
};

export const RaisedButton: Story = {
  args: {
    disabled: false,
    buttonType: ButtonType.RAISED
  }
};

export const RaisedDisabled: Story = {
  args: {
    disabled: true,
    buttonType: ButtonType.RAISED
  }
};

export const IconButton: Story = {
  args: {
    disabled: false,
    buttonType: ButtonType.ICON
  }
};

export const DisabledInteractive: Story = {
  args: {
    disabled: true,
    disabledInteractive: true
  }
};

export const DisabledRipple: Story = {
  args: {
    disableRipple: true
  }
};


