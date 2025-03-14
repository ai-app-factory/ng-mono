import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonToggleComponent } from './button-toggle.component';
import { within } from '@storybook/testing-library';

/**
 * `ButtonToggleComponent` which enhances Material `ButtonToggleModule`
 */
const meta: Meta<ButtonToggleComponent> = {
  component: ButtonToggleComponent,
  title: 'ButtonToggleComponent',
  argTypes: {
    displayGroupLabel: {
      control: { type: 'boolean' },
      description: 'Whether to display the group label',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    groupLabel: {
      control: { type: 'text' },
      description: 'The group label',
      table: {
        defaultValue: { summary: 'Select an option' },
        type: { summary: 'string' },
      },
    },
    selection: {
      options: ['single', 'multiple'],
      control: { type: 'radio' },
      description: 'Whether to allow single or multiple selection',
      table: {
        defaultValue: { summary: 'single' },
        type: { summary: 'single | multiple' },
      },
    },
    displaySelectedOptions: {
      control: { type: 'boolean' },
      description: 'Whether to display the selected options',
      table: {
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button toggle is disabled',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    hideSelectionIndicator: {
      control: { type: 'boolean' },
      description: 'Whether to hide the selection indicator',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    vertical: {
      control: { type: 'boolean' },
      description: 'Whether the button toggle is vertical',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    disabledInteractive: {
      control: { type: 'boolean' },
      description: 'Whether the button toggle is disabled interactive',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    }
  },
};
export default meta;
type Story = StoryObj<ButtonToggleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
