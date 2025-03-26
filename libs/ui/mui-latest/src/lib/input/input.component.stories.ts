import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent, FormField } from './input.component';
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
    formField: {
      control: 'object',
      description: 'The form field configuration',
      table: {
        type: { summary: 'FormField' },
      }
    },
    minLength: {
      control: 'number',
      description: 'The minimum length of the input',
      table: {
        defaultValue: { summary: '0' },
        type: { summary: 'number' },
      }
    },
    maxLength: {
      control: 'number',
      description: 'The maximum length of the input',
      table: {
        defaultValue: { summary: '100' },
        type: { summary: 'number' },
      }
    },
    valueChange: {
      action: 'valueChange',
      description: 'Emits the value of the input',
      table: {
        type: { summary: 'string' },
      }
    },
  }
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Password: Story = {
  args: {
    formField: [{
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your password',
      required: true,
      hint: 'Make sure you remember',
      minLength: '8',
      maxLength: '20',
      floatLabel: 'auto',
    }]
  }
};

export const Email: Story = {
  args: {
    formField: [{
      type: 'email',
      placeholder: 'Enter your email',
      required: true,
      hint: 'We will never share your email with anyone else.',
    }]
  }
};

export const TextArea: Story = {
  args: {
    formField: [{
      type: 'text-area',
      label: 'Message',
      placeholder: 'Enter your message',
      hint: 'Type here your message',

    }]
  }
};

export const Text: Story = {
  args: {
    formField: [{
      type: 'text',
      label: 'Name',
      placeholder: 'Enter your name',
      hint: 'Type here your name',
      floatLabel: 'auto',
    }]
  }
};

export const Number: Story = {
  args: {
    formField: [{
      type: 'number',
      label: 'amount',
      placeholder: '0',
      hint: 'add the amount you want to donate',
      floatLabel: 'always',
      prefix: {
        type: 'icon',
        icon: 'sentiment_very_satisfied'
      },
      suffix: {
        type: 'text',
        text: '.00'
      }
    }]
  }
};

export const ClearableText: Story = {
  args: {
    formField: [{
      type: 'text',
      label: 'Name',
      placeholder: 'Enter your name',
      hint: 'Type here your name',
      clearable: true,
      floatLabel: 'always'
    }]
  }
};

