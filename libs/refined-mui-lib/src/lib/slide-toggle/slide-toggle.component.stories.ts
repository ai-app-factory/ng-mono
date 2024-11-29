import type { Meta, StoryObj } from '@storybook/angular';
import { SlideToggleComponent } from './slide-toggle.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
        formControlName: 'slideToggle1',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false,
      },
      {
        label: 'Slide Toggle 2',
        checked: true,
        formControlName: 'slideToggle2',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false
      },
      {
        label: 'Slide Toggle 3',
        checked: false,
        formControlName: 'slideToggle3',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false
      },
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Slide Toggle 1")).toBeTruthy();
  },
};

export const Checked: Story = {
  args: {
    slideToggles: [
      {
        label: 'Slide Toggle 1',
        checked: false,
        formControlName: 'slideToggle1',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false,
    },
      {
        label: 'Slide Toggle 2',
        checked: true,
        formControlName: 'slideToggle2',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false
      },
      {
        label: 'Slide Toggle 3',
        checked: false,
        formControlName: 'slideToggle3',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false
      },
    ],
    formGroup: new FormGroup({
      slideToggle1: new FormControl(true, Validators.requiredTrue),
      slideToggle2: new FormControl(true, Validators.requiredTrue),
      slideToggle3: new FormControl(true, Validators.requiredTrue),
    })
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Slide Toggle 1")).toBeTruthy();
  },
};

export const Unchecked: Story = {
  args: {
    slideToggles: [
      {
        label: 'Slide Toggle 1',
        checked: false,
        formControlName: 'slideToggle1',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false,
    },
      {
        label: 'Slide Toggle 2',
        checked: true,
        formControlName: 'slideToggle2',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false
      },
      {
        label: 'Slide Toggle 3',
        checked: false,
        formControlName: 'slideToggle3',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false
      },
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Slide Toggle 1")).toBeTruthy();
  },
};

export const AllDisabled: Story = {
  args: {
    disabled: true,
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
        formControlName: 'slideToggle1',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false,
    },
      {
        label: 'Slide Toggle 2',
        checked: true,
        formControlName: 'slideToggle2',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false
      },
      {
        label: 'Slide Toggle 3',
        checked: false,
        formControlName: 'slideToggle3',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false
      },
    ],
    required: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Slide Toggle 1")).toBeTruthy();
  },
};

export const BeforeLabel: Story = {
  args: {
    slideToggles: [
      {
        label: 'Slide Toggle 1',
        checked: false,
        formControlName: 'slideToggle1',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false,
    },
      {
        label: 'Slide Toggle 2',
        checked: true,
        formControlName: 'slideToggle2',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false
      },
      {
        label: 'Slide Toggle 3',
        checked: false,
        formControlName: 'slideToggle3',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false
      },
    ],
    labelPosition: 'before'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Slide Toggle 1")).toBeTruthy();
  },
};

export const HideIcon: Story = {
  args: {
    slideToggles: [
      {
        label: 'Slide Toggle 1',
        checked: false,
        formControlName: 'slideToggle1',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false,
    },
      {
        label: 'Slide Toggle 2',
        checked: true,
        formControlName: 'slideToggle2',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false
      },
      {
        label: 'Slide Toggle 3',
        checked: false,
        formControlName: 'slideToggle3',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false
      },
    ],
    hideIcon: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Slide Toggle 1")).toBeTruthy();
  },
};

export const NoGroupLabel: Story = {
  args: {
    slideToggles: [
      {
        label: 'Slide Toggle 1',
        checked: false,
        formControlName: 'slideToggle1',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false,
    },
      {
        label: 'Slide Toggle 2',
        checked: true,
        formControlName: 'slideToggle2',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false
      },
      {
        label: 'Slide Toggle 3',
        checked: false,
        formControlName: 'slideToggle3',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false
      },
    ],
    displayGroupLabel: false,
    groupLabel: 'Do you accept the following terms?'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Slide Toggle 1")).toBeTruthy();
  },
};

export const DisableRipple: Story = {
  args: {
    slideToggles: [
      {
        label: 'Slide Toggle 1',
        checked: false,
        formControlName: 'slideToggle1',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false,
    },
      {
        label: 'Slide Toggle 2',
        checked: true,
        formControlName: 'slideToggle2',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false
      },
      {
        label: 'Slide Toggle 3',
        checked: false,
        formControlName: 'slideToggle3',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false
      },
    ],
    disableRipple: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Slide Toggle 1")).toBeTruthy();
  },
};

export const DisabledInteractive: Story = {
  args: {
    disabledInteractive: true,
    disabled: true
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Slide Toggle 1")).toBeTruthy();
  },
};

export const CustomGroupLabel: Story = {
  args: {
    slideToggles: [
      {
        label: 'Slide Toggle 1',
        checked: false,
        formControlName: 'slideToggle1',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false,
    },
      {
        label: 'Slide Toggle 2',
        checked: true,
        formControlName: 'slideToggle2',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false
      },
      {
        label: 'Slide Toggle 3',
        checked: false,
        formControlName: 'slideToggle3',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false
      },
    ],
    groupLabel: 'Group Label'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Group Label")).toBeTruthy();
  },
};

export const FewTogglesDisabled: Story = {
  args: {
    slideToggles: [
      {
        label: 'Slide Toggle 1',
        checked: false,
        formControlName: 'slideToggle1',
        disabled: true,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false,
    },
      {
        label: 'Slide Toggle 2',
        checked: true,
        formControlName: 'slideToggle2',
        disabled: true,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false
      },
      {
        label: 'Slide Toggle 3',
        checked: false,
        formControlName: 'slideToggle3',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false
      },
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Slide Toggle 1")).toBeTruthy();
  },
};

export const FewTogglesRequired: Story = {
  args: {
    slideToggles: [
      {
        label: 'Slide Toggle 1',
        checked: false,
        formControlName: 'slideToggle1',
        disabled: false,
        required: true,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false,
    },
      {
        label: 'Slide Toggle 2',
        checked: true,
        formControlName: 'slideToggle2',
        disabled: false,
        required: true,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false
      },
      {
        label: 'Slide Toggle 3',
        checked: false,
        formControlName: 'slideToggle3',
        disabled: false,
        required: false,
        hideIcon: false,
        labelPosition: 'after',
        disableRipple: false,
        disabledInteractive: false
      },
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Slide Toggle 1")).toBeTruthy();
  },
};
