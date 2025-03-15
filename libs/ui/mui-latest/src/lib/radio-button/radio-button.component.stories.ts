import type { Meta, StoryObj } from '@storybook/angular';
import { RadioButtonComponent } from './radio-button.component';
import { within } from '@storybook/testing-library';

/**
 * This `RadioComponent` is an enhanced version of `MatRadioButton` that allows for more customization.
 *
 */
const meta: Meta<RadioButtonComponent> = {
  component: RadioButtonComponent,
  title: 'RadioButtonComponent',
  argTypes: {
    radioGroupLabel: {
      control: {
        type: 'text',
      },
      description: 'The label for the radio group',
      table: {
        defaultValue: { summary: 'Radio Group' },
        type: { summary: 'string' },
      }
    },
    displayGroupLabel: {
      control: {
        type: 'boolean',
      },
      description: 'Whether to display the radio group label',
      table: {
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      }
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the radio group is disabled',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    disabledInteractive: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the radio group is disabled and interactive',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    hidden: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the radio group is hidden',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    showSelectedOption: {
      control: {
        type: 'boolean',
      },
      description: 'Whether to show the selected option',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    radioButtons: {
      control: {
        type: 'object',
      },
      description: 'The radio buttons in the group',
      table: {
        type: { summary: 'RadioButton[]' },
      },
    },
  }
};
export default meta;
type Story = StoryObj<RadioButtonComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  }
};

export const AllDisabled: Story = {
  args: {
    disabled: true,
    hidden: false
  }
};

export const RadioGroupHidden: Story = {
  args: {
    disabled: false,
    hidden: true,
    showSelectedOption: false
  }
};

export const DisabledInteractive: Story = {
  args: {
    disabled: true,
    hidden: false,
    showSelectedOption: false,
    disabledInteractive: true
  }
};

export const WithoutGroupLabel: Story = {
  args: {
    disabled: true,
    hidden: false,
    showSelectedOption: false,
    disabledInteractive: true,
    displayGroupLabel: false
  }
};

export const WithGroupLabelAndSelectedOption: Story = {
  args: {
    disabled: false,
    hidden: false,
    showSelectedOption: true,
    disabledInteractive: true,
    displayGroupLabel: true
  }
};

export const OnlyFewDisabled: Story = {
  args: {
    disabled: false,
    hidden: false,
    showSelectedOption: false,
    disabledInteractive: true,
    displayGroupLabel: true,
    radioButtons: [
      {label: 'Option 1', disabled: true},
      {label: 'Option 2', disabled: false},
      {label: 'Option 3', disabled: true}
    ]
  }
}

export const BeforeLabel: Story = {
  args: {
    disabled: false,
    hidden: false,
    showSelectedOption: false,
    disabledInteractive: true,
    displayGroupLabel: true,
    radioButtons: [
      {label: 'Option 1', labelPosition: 'before'},
      {label: 'Option 2', labelPosition: 'before'},
      {label: 'Option 3', labelPosition: 'before'}
    ]
  }
}
