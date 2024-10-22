import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InputComponent> = {
  component: InputComponent,
  title: 'InputComponent',
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
    value: {
      control: {
        type: 'text',
      },
    },
    valueChange: {
      action: 'valueChange',
    },


  },
};
export default meta;
type Story = StoryObj<InputComponent>;

export const Primary: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const CustomPlaceHolderText: Story = {
  args: {
    disabled: true,
    placeholder: "this is the placeholder text"
  }
};

export const NewLabel: Story = {
  args: {
    disabled: false,
    placeholder: "this is the placeholder text",
    label: "New Label"
  }
};


