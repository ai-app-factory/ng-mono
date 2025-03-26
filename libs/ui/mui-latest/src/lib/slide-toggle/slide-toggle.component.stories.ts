import type { Meta, StoryObj } from '@storybook/angular';
import { SlideToggleComponent } from './slide-toggle.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * `SlideToggleComponent` which is enhanced version of `MatSlideToggle`
 * It also includes `FormGroup` and `FormControl` for reactive forms
 */
const meta: Meta<SlideToggleComponent> = {
  component: SlideToggleComponent,
  title: 'SlideToggleComponent',
  argTypes: {
    displayGroupLabel: {
      control: 'boolean',
      description: 'Whether to Display the group label',
      table: {
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      }
    },
    groupLabel: {
      control: 'text',
      description: 'The group label',
      table: {
        defaultValue: { summary: 'select the following' },
        type: { summary: 'string' },
      }
    },
    hideIcon: {
      control: 'boolean',
      description: 'Whether the icon should be hidden',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      }
    },
    labelPosition: {

      options: ['before', 'after'],
      control: { type: 'radio' },
      description: 'The position of the label',
      table: {
        defaultValue: { summary: 'after' },
        type: { summary: "'before' | 'after'" },
      }
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      }
    },
    slideToggles: {
      control: 'object',
      description: 'The slide toggles',
      table: {
        defaultValue: { summary: '[]' },
        type: { summary: 'SlideToggle[]' },
      }
    },
    disableRipple: {
      control: 'boolean',
      description: 'Whether to disable the ripple effect',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      }
    },
    disabledInteractive: {
      control: 'boolean',
      description: 'Whether the input is disabled interactive',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      }
    },
    formGroup: {
      control: 'object',
      description: 'The form group',
      table: {
        defaultValue: { summary: 'FormGroup' },
        type: { summary: 'FormGroup' },
      }
    }

  }
};
export default meta;
type Story = StoryObj<SlideToggleComponent>;

export const Primary: Story = {
  args: {
    slideToggles: [
      {
        label: 'Slide Toggle 1',
        checked: false,
        formControlName: 'toggle1',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
      },
      {
        label: 'Slide Toggle 2',
        checked: true,
        formControlName: 'toggle2',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
      },
      {
        label: 'Slide Toggle 3',
        checked: false,
        formControlName: 'toggle3',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',

      },
    ],
    displayResult: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Slide Toggle 1")).toBeTruthy();
  },
};

export const AllRequired: Story = {
  args: {
    slideToggles: [
      {
        label: 'Slide Toggle 1',
        checked: false,
        formControlName: 'toggle1',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
      },
      {
        label: 'Slide Toggle 2',
        checked: true,
        formControlName: 'toggle2',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
      },
      {
        label: 'Slide Toggle 3',
        checked: false,
        formControlName: 'toggle3',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',

      },
    ],
    displayResult: true,
    formGroup: new FormGroup({
      toggle1: new FormControl(false, Validators.requiredTrue),
      toggle2: new FormControl(false, Validators.requiredTrue),
      toggle3: new FormControl(true, Validators.requiredTrue),
    }),
  }
}

export const OneRequired: Story = {
  args: {
    slideToggles: [
      {
        label: 'Slide Toggle 1',
        checked: false,
        formControlName: 'toggle1',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
      },
      {
        label: 'Slide Toggle 2',
        checked: true,
        formControlName: 'toggle2',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
      },
      {
        label: 'Slide Toggle 3',
        checked: false,
        formControlName: 'toggle3',
        disabled: false,
      }],
    displayResult: true,
    formGroup: new FormGroup({
      toggle1: new FormControl(false),
      toggle2: new FormControl(false),
      toggle3: new FormControl(true, Validators.requiredTrue),
    }),
  }
}
