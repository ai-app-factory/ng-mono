import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';
import { within } from '@storybook/testing-library';

/**
 * This is enhanced version of the Material `Badge`
 *
 */
const meta: Meta<BadgeComponent> = {
  component: BadgeComponent,
  title: 'BadgeComponent',
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the badge',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      }
    },
    hidden: {
      control: 'boolean',
      description: 'Hides the badge',
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      }
    },
    overlap: {
      control: 'boolean',
      description: 'Overlaps the badge',
      table: {
        defaultValue: { summary: 'true' },
        type: { summary: 'boolean' },
      }
    },
    content: {
      control: 'text',
      description: 'Content of the badge',
      table: {
        defaultValue: { summary: '1' },
        type: { summary: 'string | number' },
      }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      description: 'Size of the badge',
      table: {
        defaultValue: { summary: 'medium' },
        type: { summary: 'string' },
      }
    },
    position: {
      options: [
        'above',
        'after',
        'before',
        'below',
        'above after',
        'above before',
        'below after',
        'below before'
      ],
      control: { type: 'select' },
      description: 'Position of the badge',
      table: {
        defaultValue: { summary: 'above' },
        type: { summary: 'string' },
      },
    },
    badgeFor: {
      options: ['icon', 'text', 'button'],
      control: { type: 'select' },
      description: 'Badge for',
      table: {
        defaultValue: { summary: 'icon' },
        type: { summary: 'string' },
      }
    },
    hostLabel: {
      control: 'text',
      description: 'Host label',
      table: {
        defaultValue: { summary: 'I have a badge' },
        type: { summary: 'string' },
      }
    },
    icon: {
      control: 'text',
      description: 'Icon for which the badge is shown',
      table: {
        defaultValue: { summary: 'home' },
        type: { summary: 'string' },
      }
    },
  }
};
export default meta;
type Story = StoryObj<BadgeComponent>;

export const Primary: Story = {
  args: {
    badgeFor: 'icon',
    icon: 'home'
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Hidden: Story = {
  args: {
    hidden: true,
  },
};

export const WithOverlap: Story = {
  args: {
    overlap: true,
    badgeFor: "text"
  },
};

export const WithoutOverlap: Story = {
  args: {
    overlap: false,
    badgeFor: "button"
  },
};

export const WithSmallSize: Story = {
  args: {
    size: 'small',
  },
};

export const WithMediumSize: Story = {
  args: {
    size: 'medium',
    badgeFor: "text"
  },
};

export const WithLargeSize: Story = {
  args: {
    size: 'large',
    badgeFor: "button"
  },
};

export const AbovePosition: Story = {
  args: {
    position: 'above',
    badgeFor: "button"
  },
};

export const AfterPosition: Story = {
  args: {
    position: 'after',
    badgeFor: "button"
  },
};

export const BeforePosition: Story = {
  args: {
    position: 'before',
    badgeFor: "button"
  },
};

export const BelowPosition: Story = {
  args: {
    position: 'below',
    badgeFor: "button"
  },
};

export const AboveAfterPosition: Story = {
  args: {
    position: 'above after',
    badgeFor: "button"
  },
};

export const AboveBeforePosition: Story = {
  args: {
    position: 'above before',
    badgeFor: "button"
  },
};

export const BelowAfterPosition: Story = {
  args: {
    position: 'below after',
    badgeFor: "button"
  },
};

export const BelowBeforePosition: Story = {
  args: {
    position: 'below before',
    badgeFor: "button"
  },
};

export const IconBadge: Story = {
  args: {
    badgeFor: 'icon',
    icon: 'mail'
  },
};

export const TextBadge: Story = {
  args: {
    badgeFor: 'text',
    hostLabel: 'I have a badge'
  },
};

export const ButtonBadge: Story = {
  args: {
    badgeFor: 'button',
    hostLabel: 'Inbox'
  },
};

export const WithCustomIcon: Story = {
  args: {
    icon: 'menu'
  },
};

export const WithCustomContent: Story = {
  args: {
    content: '4',
    badgeFor: "button"
  },
};
