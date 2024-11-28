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
        'mat-icon-button'
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
    expect(canvas.getByText(/button works!/gi)).toBeTruthy();
  },
};
