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

export const WithGroupLabel: Story = {
  args: {
    displayGroupLabel: true,
    groupLabel: 'Select an option',
  },
};

export const WithoutGroupLabel: Story = {
  args: {
    displayGroupLabel: false,
  },
};

export const MultipleSelection: Story = {
  args: {
    selection: 'multiple',
  },
};

export const SingleSelection: Story = {
  args: {
    selection: 'single',
  },
};

export const WithSelectedOptions: Story = {
  args: {
    displaySelectedOptions: true,
  },
};

export const WithoutSelectedOptions: Story = {
  args: {
    displaySelectedOptions: false,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const vertical: Story = {
  args: {
    vertical: true,
  },
};

export const DisabledInteractive: Story = {
  args: {
    disabledInteractive: true,
    disabled: true,
  },
};

export const HideSelectionIndicator: Story = {
  args: {
    hideSelectionIndicator: true,
  },
};

export const ShowSelectionIndicator: Story = {
  args: {
    hideSelectionIndicator: false,
  },
};

export const WithCustomOptions: Story = {
  args: {
    buttonToggleLabels: [
      'Option 1',
      'Option 2',
      'Option 3',
    ],
  },
};
