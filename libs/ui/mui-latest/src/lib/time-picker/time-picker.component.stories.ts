import type { Meta, StoryObj } from '@storybook/angular';
import { TimePickerComponent } from './time-picker.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/test';
import { ReactiveFormsModule } from '@angular/forms';

const meta: Meta<TimePickerComponent> = {
  component: TimePickerComponent,
  title: 'TimePickerComponent',
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
    interval: {
      control: 'text',
      description: 'The interval in minutes',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '30m | 1h' },
      },
    },
    options: {
      control: 'object',
      description: 'The options to display in the time picker',
      table: {
        type: { summary: 'MatTimepickerOption<Date>[]' },
        defaultValue: { summary: 'null' },
      },
    },
    label: {
      control: 'text',
      description: 'The label for the time picker',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Pick a time' },
      },
    },
    min: {
      control: 'text',
      description: 'The minimum time',
      table: {
        type: { summary: 'string | Date' },
        defaultValue: { summary: 'null' }, 
      },
    },
    max: {
      control: 'text',
      description: 'The maximum time',
      table: {
        type: { summary: 'string | Date' },
        defaultValue: { summary: 'null' },
      },
    },
    locale: {
      control: 'select',
      options: ['en-US', 'bg-BG', 'fr-FR', 'de-DE'],
      description: 'The locale for the time picker',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'en-US' },
      },
    },
  },
};
export default meta;
type Story = StoryObj<TimePickerComponent>;

export const Primary: Story = {
  args: {
    toggleIcon: 'keyboard_arrow_down',
    interval: null,
    options: null,
    label: 'Pick a time',
    min: null,
    max: null,
    locale: 'en-US',
  },
};


export const WithCustomLabel: Story = {
  args: {
    toggleIcon: 'keyboard_arrow_down',
    interval: null,
    options: null,
    label: 'Select a time',
    min: null,
    max: null,
    locale: 'en-US',
  },
};

export const WithCustomIcon: Story = {
  args: {
    toggleIcon: 'access_time',
    interval: '15m',
    options: null,
    label: 'Every 15 minutes',
    min: null,
    max: null,
    locale: 'en-US',
  },
};

export const WithCustomInterval: Story = {
  args: {
    toggleIcon: 'keyboard_arrow_down',
    interval: '45m',
    options: null,
    label: 'Every 45 minutes',
    max: null,
    min: null,
    locale: 'en-US',
  },
};

export const WithCustomIntervalHours: Story = {
  args: {
    toggleIcon: 'keyboard_arrow_down',
    interval: '1h',
    options: null,
    label: 'Every hour',
    min: null,
    max: null,
    locale: 'en-US',
  },
};

export const WithCustomOptions: Story = {
  args: {
    toggleIcon: 'keyboard_arrow_down',
    interval: null,
    options: [
      { label: 'Morning', value: new Date(2024, 0, 1, 9, 0, 0) },
      { label: 'Noon', value: new Date(2024, 0, 1, 12, 0, 0) },
      { label: 'Evening', value: new Date(2024, 0, 1, 22, 0, 0) },
    ],
    locale: 'en-US',
  },
};

export const WithFormIntegration: Story = {
  args: {
    toggleIcon: 'keyboard_arrow_down',
    interval: null,
    options: null,
    label: 'Pick a time',
    min: '12:30',
    max: '17:30',
    locale: 'en-US',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Pick a time') as HTMLInputElement;
    input.value = '11:00';
    input.dispatchEvent(new Event('input'));
    await expect(canvas.getByText("Value is too early")).toBeTruthy();
  },
};