import type { Meta, StoryObj } from '@storybook/angular';
import { DialogComponent } from './dialog.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<DialogComponent> = {
  component: DialogComponent,
  title: 'DialogComponent',
  argTypes: {
    title: {
      control: 'text',
      description: 'The title displayed at the top of the dialog',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Default Title' },
      },
    },
    content: {
      control: 'text',
      description: 'The content of the dialog body',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Default Message' },
      },
    },
    confirmLabel: {
      control: 'text',
      description: 'The label of the confirm button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Confirm' },
      },
    },
    cancelLabel: {
      control: 'text',
      description: 'The label of the cancel button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Cancel' },
      },
    },
    disableClose: {
      control: 'boolean',
      description: 'Disables closing the dialog by clicking outside or pressing escape.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    width: {
      control: 'text',
      description: 'The width of the dialog',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '400px' },
      },
    },
    height: {
      control: 'text',
      description: 'The height of the dialog',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    hasBackdrop: {
      control: 'boolean',
      description: 'Show backdrop',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
  },
};
export default meta;
type Story = StoryObj<DialogComponent>;

export const Primary: Story = {
  args: {
    title: 'Dialog Title',
    content: 'Dialog content goes here.',
    confirmLabel: 'Confirm',
    cancelLabel: 'Cancel',
    disableClose: false,
    width: '400px',
    height: '',
    hasBackdrop: true,
  },
};

export const CustomSize: Story = {
  args: {
    title: 'Custom Dialog',
    content: 'This is a custom-sized dialog.',
    confirmLabel: 'Save',
    cancelLabel: 'Discard',
    disableClose: true,
    width: '600px',
    height: '300px',
    hasBackdrop: true,
  },
};