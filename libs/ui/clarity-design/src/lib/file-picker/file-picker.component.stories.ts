import type { Meta, StoryObj } from '@storybook/angular';
import { FilePickerComponent } from './file-picker.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<FilePickerComponent> = {
  component: FilePickerComponent,
  title: 'FilePickerComponent',
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the file picker',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Choose File' },
      },
    },
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical', 'compact'],
      description: 'Layout of the file picker',
      table: {
        type: { summary: "'horizontal' | 'vertical' | 'compact'" },
        defaultValue: { summary: "'horizontal'" },
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the file picker is required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    accept: {
      control: 'text',
      description: 'Accepted file types',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    minFileSize: {
      control: 'number',
      description: 'Minimum file size in bytes',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: undefined },
      },
    },
    maxFileSize: {
      control: 'number',
      description: 'Maximum file size in bytes',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: undefined },
      },
    },
    helperText: {
      control: 'text',
      description: 'Helper text for the file picker',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Helper Message' },
      },
    },
    successText: {
      control: 'text',
      description: 'Success message for the file picker',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Success Message' },
      },
    },
    fileChange: {
      action: 'fileChange',
      description: 'Event emitted when files are selected',
      table: {
        type: { summary: 'EventEmitter<File[]>' },
        defaultValue: { summary: 'null' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A component for selecting files with various options.',
      },
    },
  },
};
export default meta;
type Story = StoryObj<FilePickerComponent>;

export const HorizontalFilePicker: Story = {
  args: {
    label: 'Choose File',
    layout: 'horizontal',
    required: false,
    accept: '.txt',
    multiple: false,
  },
};

export const VerticalFilePicker: Story = {
  args: {
    label: 'Choose File',
    layout: 'vertical',
    required: false,
    accept: '.txt',
    multiple: false,
  },
};

export const CompactFilePicker: Story = {
  args: {
    label: 'Choose File',
    layout: 'compact',
    required: false,
    accept: '.txt',
    multiple: false,
  },
};

export const RequiredFilePicker: Story = {
  args: {
    label: 'Choose File',
    layout: 'horizontal',
    required: true,
    accept: '.txt',
    multiple: false,
  },
};
export const MultipleFilePicker: Story = {
  args: {
    label: 'Choose File',
    layout: 'horizontal',
    required: false,
    accept: '.txt',
    multiple: true,
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/file-picker works!/gi)).toBeTruthy();
  },
};
