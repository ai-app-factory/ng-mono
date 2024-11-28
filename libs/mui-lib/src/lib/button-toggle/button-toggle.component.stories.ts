import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonToggleComponent } from './button-toggle.component';


const meta: Meta<ButtonToggleComponent> = {
  component: ButtonToggleComponent,
  title: 'ButtonToggleComponent',
  argTypes: {
    displayGroupLabel: {
      table: {
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
      description: 'Whether to display the group label',
    },
    groupLabel: {
      table: {
        defaultValue: { summary: 'Select an option' },
        type: { summary: 'string' },
      },
      description: 'The label of the button toggle group',
      control: {
        type: 'text',
      },
    },
    selection: {
      table: {
        defaultValue: { summary: 'single' },
        type: { summary: 'string' },
      },
      options: ['single', 'multiple'],
      control: {
        type: 'radio',
      },
      description: 'The selection mode of the button toggle group',
    },
    vertical: {
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
      description: 'Whether the button toggle group is vertical',
    },
    disabledInteractive: {
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
      description: 'Whether the button toggle group is interactive when disabled',
    },
    options: {
      table: {
        defaultValue: { summary: "['Bold', 'Italic', 'Underline']" },
        type: { summary: 'string[]' },
      },
      control: {
        type: 'object'
      },
      description: 'The options of the button toggle group',
    },
    disabled: {
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
      description: 'Whether the button toggle group is disabled',
    },
    value: {
      table: {
        defaultValue: { summary: '' },
        type: { summary: 'string' },
      },
      control: {
        type: 'text',
      },
      description: 'The value of the button toggle group',
    },
    hideSelectionIndicator: {
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
      description: 'Whether to hide the selection indicator',
    },
    displaySelectedOptions: {
      table: {
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      },
      control: {
        type: 'boolean',
      },
      description: 'Whether to display the selected options',
    },
  },
};
export default meta;
type Story = StoryObj<ButtonToggleComponent>;

export const Primary: Story = {
  args: {
    displaySelectedOptions: true,
    hideSelectionIndicator: true
  },
};

export const Heading: Story = {
  args: {},
};

export const MultipleSelectedOptions: Story = {
  args: {
    selection: "multiple"
  },

};

export const SingleSelectedOption: Story = {
  args: {
    selection: "single"
  }
};

export const SingleSelectionIndicatorHidden: Story = {
  args: {
    selection: "single",
    hideSelectionIndicator: true
  }
};

export const MultipleSelectionIndicatorHidden: Story = {
  args: {
    selection: "multiple",
    hideSelectionIndicator: true
  }
};

export const CustomGroupLabel: Story = {
  args: {
    selection: "multiple",
    hideSelectionIndicator: true,
    groupLabel: "Custom Group Label"
  }
};

export const HideGroupLabel: Story = {
  args: {
    displaySelectedOptions: true,
    hideSelectionIndicator: true,
    displayGroupLabel: false
  }
};

export const VerticalButtonToggle: Story = {
  args: {
    displaySelectedOptions: true,
    hideSelectionIndicator: true,
    vertical: true
  }
};

export const HideSelectedOptions: Story = {
  args: {
    displaySelectedOptions: false,
    hideSelectionIndicator: true
  }
};

export const DisabledInteractive: Story = {
  args: {
    displaySelectedOptions: false,
    hideSelectionIndicator: true,
    disabledInteractive: true,
    disabled: true
  }
};

export const CustomOptions: Story = {
  args: {
    displaySelectedOptions: false,
    hideSelectionIndicator: true,
    disabledInteractive: true,
    disabled: true,
    options: [
      'Option 1',
      'Option 2',
      'Option 3'
    ]
  }
};
