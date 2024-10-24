import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent, ButtonType } from './button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    buttonType: {
      options: [
        ButtonType.RAISED,
        ButtonType.FAB,
        ButtonType.BUTTON,
        ButtonType.FLAT,
        ButtonType.STROKED,
        ButtonType.MINI_FAB
      ],
      control: {
        type: 'radio',
      },
    },
  },
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

