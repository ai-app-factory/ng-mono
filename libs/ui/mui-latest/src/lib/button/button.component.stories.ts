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
    expect(canvas.getByText(/button works!/gi)).toBeTruthy();
  },
};
