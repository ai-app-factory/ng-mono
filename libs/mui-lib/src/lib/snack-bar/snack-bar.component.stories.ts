import type { Meta, StoryObj } from '@storybook/angular';
import { SnackBarComponent } from './snack-bar.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SnackBarComponent> = {
  component: SnackBarComponent,
  title: 'SnackBarComponent',
  argTypes: {
    snackbarLabel: {
      control: { type: 'text' },
    },
    message: {
      control: { type: 'text' },
    },
    action: {
      control: { type: 'text' },
    },
    duration: {
      control: { type: 'number' },
    },
    horizontalPosition: {
      control: { type: 'select' },
      options: ['start', 'center', 'end', 'left', 'right'],
    },
    verticalPosition: {
      control: { type: 'select' },
      options: ['top', 'bottom'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};
export default meta;
type Story = StoryObj<SnackBarComponent>;

export const Primary: Story = {
  args: {},
};


export const StartTopPosition: Story = {
  args: {
    horizontalPosition: "start",
    verticalPosition: "top"
  }
};


export const StartBottom: Story = {
  args: {
    horizontalPosition: "start",
    verticalPosition: "bottom"
  }
};


export const EndBottomPosition: Story = {
  args: {
    horizontalPosition: "end",
    verticalPosition: "bottom"
  }
};


export const Duration5Seconds: Story = {
  args: {
    horizontalPosition: "end",
    verticalPosition: "bottom",
    duration: 5000
  }
};


export const NewMessageNewAction: Story = {
  args: {
    horizontalPosition: "end",
    verticalPosition: "bottom",
    duration: 5000,
    action: "New Action",
    message: "New Message"
  }
};


export const CenterTopPosition: Story = {
  args: {
    horizontalPosition: "center",
    verticalPosition: "top",
    duration: 3000,
    action: "New Action",
    message: "New Message"
  },

};


export const CustomLabel: Story = {
  args: {
    horizontalPosition: "center",
    verticalPosition: "top",
    duration: 3000,
    action: "New Action",
    message: "New Message",
    snackbarLabel: "Click to open snackbar"
  }
};


