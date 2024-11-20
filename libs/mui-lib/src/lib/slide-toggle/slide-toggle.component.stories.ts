import type { Meta, StoryObj } from '@storybook/angular';
import { SlideToggleComponent } from './slide-toggle.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SlideToggleComponent> = {
  component: SlideToggleComponent,
  title: 'SlideToggleComponent',
  argTypes: {
    label: {
      control: 'text' ,
      default: 'Slide Toggle',
      description: 'The label for the slide toggle'
    },
    checked: {
      control: 'boolean',
      description: 'Whether the slide toggle is checked',
      default: false
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the slide toggle is disabled',
      default: false
    },
    labelPosition: {
      control: 'radio',
      options: ['before', 'after'],
      description: 'The position of the label wrt the slide toggle',
      default: 'after'
    },
    hideIcon: {
      control: 'boolean',
      description: 'Whether the icon is hidden',
      default: false
    },
    required: {
      control: 'boolean',
      description: 'Whether the slide toggle is required',
      default: false
    },
  },
};
export default meta;
type Story = StoryObj<SlideToggleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/slide-toggle works!/gi)).toBeTruthy();
  },
};

export const DisabledToggle: Story = {
  args: {
    disabled: true
  }
};

export const CheckedDisabledToggle: Story = {
  args: {
    disabled: true,
    checked: true
  }
};

export const NewLabelForToggle: Story = {
  args: {
    disabled: false,
    checked: true,
    label: "New Label for Toggle"
  }
};
