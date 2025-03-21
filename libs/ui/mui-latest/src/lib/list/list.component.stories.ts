import type { Meta, StoryObj } from '@storybook/angular';
import { ListComponent } from './list.component';
import { within } from '@storybook/testing-library';

const meta: Meta<ListComponent> = {
  component: ListComponent,
  title: 'ListComponent',
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the list is disabled.',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    disableRipple: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the list should have a ripple effect.',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    listType: {
      options: ['list', 'selection'],
      control: {
        type: 'select',
      },
      description: 'The type of list to render.',
      table: {
        defaultValue: {
          summary: 'list',
        },
        type: {
          summary: 'list | selection',
        },
      },
    },
    lines: {
      control: {
        type: 'number',
      },
      description: 'The number of lines to display for each list item.',
      table: {
        defaultValue: {
          summary: '1',
        },
        type: {
          summary: 'number',
        },
      },
    },
    multiple: {
      control: {
        type: 'boolean',
      },
      description: 'Whether multiple items can be selected.',
      table: {
        defaultValue: {
          summary: 'true',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    listItems: {
      control: {
        type: 'object',
      },
      description: 'The list items to display.',
      table: {
        defaultValue: {
          summary: '[]',
        },
        type: {
          summary: 'ListItem[]',
        },
      },
    }
  },
};
export default meta;
type Story = StoryObj<ListComponent>;

export const Primary: Story = {
  args: {
    disabled: false,
    disableRipple: false,
    listType: 'list',
    withDivider: true,
    listItems: [
      {

        title: 'Item 1',
      },
      {
        title: 'Item 2',
      },
      {
        title: 'Item 3',
      },
    ],
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
