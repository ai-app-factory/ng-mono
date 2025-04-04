import type { Meta, StoryObj } from '@storybook/angular';
import { AlertComponent } from './alert.component';

const meta: Meta<AlertComponent> = {
  component: AlertComponent,
  title: 'AlertComponent',
  argTypes: {
    showActions: {
      control: 'boolean',
      description: 'Toggle visibility of action buttons',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    alerts: {
      control: 'object',
      description: 'Array of alert objects',
      table: {
        type: { summary: 'Alert[]' },
        defaultValue: { summary: '[]' },
      },
    },
  },
};
export default meta;
type Story = StoryObj<AlertComponent>;

export const SimpleAlert: Story = {
  args: {
    alerts: [
      {
        message: 'This is a simple alert.',
        type: 'info',
        icon: 'info-standard',
        closable: false,
      },
    ],
  },
};

export const ClosableAlert: Story = {
  args: {
    alerts: [
      {
        message: 'This is a Closable alert.',
        type: 'info',
        icon: 'info-standard',
        closable: true,
      },
    ],
  },
};

export const WithActions: Story = {
  args: {
    showActions: true,
    alerts: [
      {
        message: 'This alert has actions.',
        type: 'warning',
        actions: [
          { label: 'ShutDown', callback: () => alert('ShutDown clicked!') },
          { label: 'Delete', callback: () => alert('Delete clicked!') },
        ],
        closable: false,
      },
    ],
  },
};

export const WithSmallSize: Story = {
  args: {
    alerts: [
      {
        message: 'This is a small alert.',
        type: 'info',
        icon: 'info-standard',
        closable: true,
        sizeSmall: true,
      },
    ],
  },
};

export const WithLightWeight: Story = {
  args: {
    alerts: [
      {
        message: 'This is a lightweight alert.',
        type: 'info',
        icon: 'info-standard',
        closable: true,
        lightWeight: true,
      },
    ],
  },
};

export const WithDifferentIcons: Story = {
  args: {
    alerts: [
      {
        message: 'This is an info alert.',
        type: 'info',
        icon: 'info-standard',
        closable: true,
      },
      {
        message: 'With Airplane Icon',
        type: 'success',
        icon: 'airplane',
        closable: true,
      },
      {
        message: 'With Alarm Clock Icon',
        type: 'warning',
        icon: 'alarm-clock',
        closable: true,
      },
    ]
  },
};

export const LongAlertMessage: Story = {
  args: {
    alerts: [
      {
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 1',
        type: 'info',
        icon: 'info-standard',
        closable: true,
        actions: [
          { label: 'Fix', callback: () => alert('Fix clicked!') },
          { label: 'Ignore', callback: () => alert('Ignore clicked!') },
        ],
      },
    ],
    showActions: true,
  },
};

export const DifferentTypesofAlerts: Story = {
  args: {
    alerts: [
      {
        message: 'This is an info alert.',
        type: 'info',
        icon: 'info-standard',
        closable: true,
      },
      {
        message: 'This is a success alert.',
        type: 'success',
        icon: 'success-standard',
        closable: true,
      },
      {
        message: 'This is a warning alert.',
        type: 'warning',
        icon: 'warning-standard',
        closable: true,
      },
      {
        message: 'This is a danger alert.',
        type: 'error',
        icon: 'error-standard',
        closable: true,
      },
      {
        message: 'This is an alert.',
        type: 'error',
        icon: 'alert-standard',
        closable: false,
      },
    ],
  },
};

export const PaginatedAlerts: Story = {
  args: {
    alerts: [
      { message: 'Alert 1', type: 'info', closable: true },
      { message: 'Alert 2', type: 'success', closable: true },
      { message: 'Alert 3', type: 'warning', closable: true },
      { message: 'Alert 4', type: 'error', closable: true },
    ],
  },
};






