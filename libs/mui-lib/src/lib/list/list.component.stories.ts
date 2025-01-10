import type { Meta, StoryObj } from '@storybook/angular';
import { ListComponent } from './list.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ListComponent> = {
  component: ListComponent,
  title: 'ListComponent',
  argTypes: {
    type: {
      control: 'radio',
      options: ['basic', 'multi-line', 'navigation', 'action', 'selection', 'icon', 'avatar', 'section', 'navigation-complex'],
      description: 'The type of list',
      table: {
        type: { summary: 'basic | multi-line | navigation' },
        defaultValue: { summary: 'basic' },
      },
    },
  },
};
export default meta;
type Story = StoryObj<ListComponent>;

export const Basic: Story = {
  args: {
    type: 'basic',
  },
};

export const MultiLine: Story = {
  args: {
    type: 'multi-line',
  },
};

export const Navigation: Story = {
  args: {
    type: 'navigation',
  },
};

export const Action: Story = {
  args: {
    type: 'action',
  },
};

export const Selection: Story = {
  args: {
    type: 'selection',
  },
};

export const Icon: Story = {
  args: {
    type: 'icon',
  },
};

export const Avatar: Story = {
  args: {
    type: 'avatar',
  },
};
