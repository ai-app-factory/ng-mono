import type { Meta, StoryObj } from '@storybook/angular';
import { DatePickerComponent } from './date-picker.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DatePickerComponent> = {
  component: DatePickerComponent,
  title: 'DatePickerComponent',
  argTypes: {
    toggleIcon: {
      control: 'select',
      options: ['keyboard_arrow_down', 'access_time', 'event', 'schedule'],
      description: 'The icon to display on the toggle button',
      table: {
        type: { summary: 'keyboard_arrow_down | access_time | event | schedule' },
        defaultValue: { summary: 'keyboard_arrow_down' },
      },
    },
    datePickerType: {
      control: 'select',
      options: ['single', 'range'],
      description: 'The type of date picker to display',
      table: {
        type: { summary: 'single | range' },
        defaultValue: { summary: 'single' },
      },
    },
    actionButton: {
      control: 'boolean',
      description: 'Whether to display an action buttons',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      control: 'text',
      description: 'The label for the date picker',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Pick a date' },
      },
    },
    openMethod: {
      control: 'select',
      options: ['normal', 'button'],
      description: 'How to open the date picker',
      table: {
        type: { summary: 'normal | button' },
        defaultValue: { summary: 'normal' },
      },
    },
    disableInput: {
      control: 'boolean',
      description: 'Whether to disable the input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disableToggle: {
      control: 'boolean',
      description: 'Whether to disable the toggle button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    locale: {
      control: 'select',
      options: ['en-US', 'bg-BG', 'fr-FR', 'de-DE'],
      description: 'The locale for the date picker',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'en-US' },
      },
    },
    minDate: {
      control: 'text',
      description: 'The minimum date',
      table: {
        type: { summary: 'string | Date' },
        defaultValue: { summary: 'null' },
      },
    },
    maxDate: {
      control: 'text',
      description: 'The maximum date',
      table: {
        type: { summary: 'string | Date' },
        defaultValue: { summary: 'null' },
      },
    },
    startDate: {
      control: 'text',
      description: 'The start date',
      table: {
        type: { summary: 'string | Date' },
        defaultValue: { summary: 'null' },
      },
    },

    startView: {
      control: 'select',
      options: ['month', 'year', 'multi-year'],
      description: 'The start view for the date picker',
      table: {
        type: { summary: 'month | year | multi-year' },
        defaultValue: { summary: 'month' },
      },
    },
    touchUi: {
      control: 'boolean',
      description: 'Whether to use touch UI',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
};
export default meta;
type Story = StoryObj<DatePickerComponent>;

export const BasicDatePicker: Story = {
  args: {
    label: 'Pick a date',
    datePickerType: 'single',
    locale: 'en-US',
  },
};

export const BasicDateRangePicker: Story = {
  args: {
    label: 'Pick a date range',
    datePickerType: 'range',
    locale: 'en-US',
  },
};

export const DatePickerWithActionButtons: Story = {
  args: {
    label: 'Pick a date',
    datePickerType: 'single',
    actionButton: true,
    locale: 'en-US',
  },
};

export const DatePickerWithToggleButton: Story = {
  args: {
    label: 'Pick a date',
    datePickerType: 'single',
    openMethod: 'button',
    locale: 'en-US',
  },
};

export const DatePickerWithCustomIcon: Story = {
  args: {
    label: 'Pick a date',
    datePickerType: 'single',
    toggleIcon: 'event',
    locale: 'en-US',
  },
};

export const DisabledDatePicker: Story = {
  args: {
    label: 'Pick a date',
    datePickerType: 'single',
    disableInput: true,
    disableToggle: true,
    locale: 'en-US',
  },
};

export const WithDifferentLocales: Story = {
  args: {
    label: 'Pick a date',
    datePickerType: 'single',
    locale: 'bg-BG',
  },
};



export const DatePickerWithMinMaxValidation: Story = {
  args: {
    label: 'Pick a date',
    datePickerType: 'single',
    locale: 'en-US',
    minDate: new Date(2023, 0, 1), // January 1, 2023
    maxDate: new Date(2023, 11, 31), // December 31, 2023
  },
};

export const WithStartDate: Story = {
  args: {
    label: 'Pick a date',
    datePickerType: 'single',
    locale: 'en-US',
    startDate: new Date(2023, 10, 15), // June 15, 2023
  },
};

export const DatePickerTouchUI: Story = {
  args: {
    label: 'Pick a date',
    datePickerType: 'single',
    touchUi: true,
    locale: 'en-US',
  },
};

export const DatePickerForDifferentStartView: Story = {
  args: {
    label: 'Pick a date',
    datePickerType: 'single',
    startView: 'year',
    locale: 'en-US',
  },
};
