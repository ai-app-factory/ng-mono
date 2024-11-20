import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent, BadgeFor, BadgePosition } from './badge.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import exp from 'constants';

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
    expect(canvas.getByText("I have a badge")).toBeTruthy();
  },
};


export const ButtonWithOverlap: Story = {
  args: {
    overlap: true,
    badgeFor: BadgeFor.BUTTON
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("I have a badge")).toBeTruthy();
  }
};

export const IconWithOverlap: Story = {
  args: {
    overlap: true,
    badgeFor: BadgeFor.ICON
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("I have a badge")).toBeTruthy();
  }
};

export const TextWithOverlap: Story = {
  args: {
    overlap: true,
    badgeFor: BadgeFor.TEXT
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("I have a badge")).toBeTruthy();
  }
};

export const ButtonBadgeBefore: Story = {
  args: {
    position: BadgePosition.BEFORE,
    badgeFor: BadgeFor.BUTTON
  },
};

export const ButtonBadgeBelow: Story = {
  args: {
    position: BadgePosition.BELOW,
    badgeFor: BadgeFor.BUTTON
  },
};



