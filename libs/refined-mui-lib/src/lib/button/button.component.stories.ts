import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

/**
 * The `ButtonComponent` is a simple button that can be used to trigger an action.
 * <p>@class ButtonComponent</p>
 */
const meta: Meta<ButtonComponent> = {

  title: 'ButtonComponent',
  component: ButtonComponent,
  argTypes: {
    label: {
      table: {
        defaultValue: { summary: 'Button Text' },
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
      description: 'The text to display on the button',
    },
    disabled: {
      table: {
        defaultValue: { summary: "False" },
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
      description: 'Whether the button is disabled',
    },
    disabledInteractive: {
      table: {
        defaultValue: { summary: "False" },
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
      description: 'Whether the button is interactive when disabled',
    },
    disableRipple: {
      table: {
        defaultValue: { summary: "False" },
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
      description: 'Whether the button has a ripple effect',
    },
    buttonType: {
      table: {
        defaultValue: { summary: 'mat-raised-button' },
        type: { summary: 'string' },
      },
      options: [
        'mat-raised-button',
        'mat-fab',
        'mat-button',
        'mat-flat-button',
        'mat-stroked-button',
        'mat-mini-fab',
        'mat-icon-button',
        'mat-menu-item',
      ],
      control: {
        type: 'radio'
      },
      description: 'The type of button to display',
    },
    icon: {
      table: {
        defaultValue: { summary: 'home' },
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
      description: 'The icon to display on the button',
    },
    onClick: {
      table: {
        defaultValue: { summary: '() => {}' },
        type: { summary: '() => void' },
      },
      description: 'The function to call when the button is clicked',
    },
  },
};
export default meta;
type Story = StoryObj<ButtonComponent>;


export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Button Text")).toBeTruthy();
  },
};

/**
 * Story to display a disabled button
 * with args: `{ disabled: true }`
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Button Text")).toBeTruthy();
  },
};

/**
 * Story to display an icon button
 * with args : `{
 *    icon: 'home',
 *    buttonType: 'mat-icon-button'
 * }`
 */
export const Icon: Story = {
  args: {
    icon: 'home',
    buttonType: 'mat-icon-button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("home")).toBeTruthy();
  },
};

/**
 * Story to display a button with custom label
 * with args: `{ label: 'this is the label text' }`
 */
export const CustomLabel: Story = {
  args: {
    label: 'this is the label text',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("this is the label text")).toBeTruthy();
  },
};

/**
 * Story to display a flat button
 * with args: `{ buttonType: 'mat-flat-button' }`
 */
export const Flat: Story = {
  args: {
    buttonType: 'mat-flat-button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Button Text")).toBeTruthy();
  },
};

/**
 * Story to display a stroked button
 * with args: `{ buttonType: 'mat-stroked-button' }`
 */
export const Stroked: Story = {
  args: {
    buttonType: 'mat-stroked-button',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Button Text")).toBeTruthy();
  },
};

/**
 * Story to display a mini fab button
 * with args: `{ buttonType: 'mat-mini-fab' }`
 */

export const MiniFab: Story = {
  args: {
    buttonType: 'mat-mini-fab',
  },
};

/**
 * Story to display a fab button
 * with args: `{ buttonType: 'mat-fab' }`
 */
export const Fab: Story = {
  args: {
    buttonType: 'mat-fab',
  },
};

/**
 * Story to display a normal button
 * with args: `{ buttonType: 'mat-button' }`
 */
export const Button: Story = {
  args: {
    buttonType: 'mat-button',
  },
};

/**
 * Story to display a raised button
 * with args: `{ buttonType: 'mat-raised-button' }`
 */
export const Raised: Story = {
  args: {
    buttonType: 'mat-raised-button',
  },
};

/**
 * Story to display a disabled interactive button
 * with args: `{
 *    disabledInteractive: true,
 *    disabled: true
 * }`
 */
export const DisabledInteractive: Story = {
  args: {
    disabledInteractive: true,
    disabled: true,
  },
};

/**
 * Story to display a button with disabled ripple effect
 * with args: `{ disableRipple: true }`
 */
export const DisableRipple: Story = {
  args: {
    disableRipple: true,
  },
};

export const MatMenuItem: Story = {
  args: {
    icon: "home",
    buttonType: "mat-menu-item",
    label: "home"
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("home")).toBeTruthy();
  }
};

export const DisabledMenuItem: Story = {
  args: {
    icon: "home",
    buttonType: "mat-menu-item",
    disabled: true,
    label: "home"
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("home")).toBeTruthy();
  }
};
