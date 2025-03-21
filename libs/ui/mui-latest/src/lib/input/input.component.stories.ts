import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

/**
 * `InputComponent` with inbuilt form validation for email and password.
 * Additional features include `clearable`, `disabled`, `disabledInteractive`, `hint`, `icon`, `label`, `labelAppearance`, `placeholder`, `type`, and `value`.
 */
const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'InputComponent',
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      description: 'The label for the input field.',
      table: {
        defaultValue: {
          summary: 'Type here',
        },
        type: {
          summary: 'string',
        },
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
      description: 'The placeholder for the input field.',
      table: {
        defaultValue: {
          summary: 'Placeholder',
        },
        type: {
          summary: 'string',
        },
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the input field is disabled.',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    disabledInteractive: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the input field is disabled and interactive.',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    value: {
      control: {
        type: 'text',
      },
      description: 'The value of the input field.',
      table: {
        defaultValue: {
          summary: '',
        },
        type: {
          summary: 'string'
        },
      },
    },
    clearable: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the input field is clearable.',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean'
        },
      },
    },
    hint: {
      control: {
        type: 'text',
      },
      description: 'The hint for the input field.',
      table: {
        defaultValue: {
          summary: '',
        },
        type: {
          summary: 'string'
        },
      },
    },
    icon: {
      control: {
        type: 'text',
      },
      description: 'The icon for the input field.',
      table: {
        defaultValue: {
          summary: '',
        },
        type: {
          summary: 'string'
        },
      },
    },
    labelAppearance: {
      options: ['fill', 'outline'],
      control: {
        type: 'select',
      },
      description: 'The appearance of the label.',
      table: {
        defaultValue: {
          summary: 'fill',
        },
        type: {
          summary: 'fill | outline',
        },
      },
    },
    type: {
      options: ['text', 'number', 'password', 'email', 'tel', 'url', 'search', 'date', 'time', 'datetime-local', 'month', 'color', 'text-area'],
      control: {
        type: 'select',
      },
      description: 'The type of the input field.',
      table: {
        defaultValue: {
          summary: 'text',
        },
        type: {
          summary: 'InputType',
        },
      },
    },
    maxLength: {
      control: {
        type: 'text',
      },
      description: 'The maximum length of the input field.',
      table: {
        defaultValue: {
          summary: '100',
        },
        type: {
          summary: 'string'
        },
      },
    },
    minLength: {
      control: {
        type: 'text',
      },
      description: 'The minimum length of the input field.',
      table: {
        defaultValue: {
          summary: '0',
        },
        type: {
          summary: 'string'
        },
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the input field is required.',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean'
        },
      },
    }
  }
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {
    label: 'Type here',
    placeholder: 'Placeholder',
    disabled: false,
    disabledInteractive: false,
    value: '',
    clearable: false,
    hint: '',
    icon: '',
    labelAppearance: 'fill',
    type: 'text',
    maxLength: '100',
    minLength: '0',
    required: false
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
