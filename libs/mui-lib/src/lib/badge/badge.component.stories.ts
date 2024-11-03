import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<BadgeComponent> = {
  component: BadgeComponent,
  title: 'BadgeComponent',
  argTypes: {
    size: {
      options: [
        'small',
        'medium',
        'large'
      ],
      control: 'radio'
    },
    content: {control: 'text'},
    hostLabel: {control: 'text'},
    disabled: {control: 'boolean'},
    hidden: {control: 'boolean'},
    overlap: {control: 'boolean'},
    badgeFor: {
      options: ['text', 'button', 'icon'],
      control: 'radio'
    },
    position: {
      options: [
        'before',
        'after',
        'below',
        'above',
      ],
      control: 'radio'
    },
    icon: {control: 'text'}
  }
};
export default meta;
type Story = StoryObj<BadgeComponent>;

export const Primary: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/badge works!/gi)).toBeTruthy();
  },
};


