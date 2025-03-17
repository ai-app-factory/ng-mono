import type { Meta, StoryObj } from '@storybook/angular';
import { ToolBarComponent } from './tool-bar.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/test';


/**
 * `ToolBarComponent` is a component that displays a toolbar with a title and icons.
 */
const meta: Meta<ToolBarComponent> = {
  component: ToolBarComponent,
  title: 'ToolBarComponent',
  argTypes: {
    toolBarRows: {
      description: 'The rows to display in the toolbar',
      table: {
        type: {
          summary: 'ToolBarRow[]',
        },
      },
    },
    toolBarType: {
      options: ['default', 'with-templates', 'only-icons'],
      control: { type: 'select' },
      description: 'The type of toolbar to display',
      table: {
        defaultValue: {
          summary: 'default',
        },
        type: {
          summary: 'default | with-templates | only-icons',
        },
      },
    },
    onlyIconsList: {
      control: { type: 'object' },
      description: 'The list of icons to display when onlyIcons is selected',
      table: {
        type: {
          summary: 'string[]',
        },
      },
    },
  },
};
export default meta;
type Story = StoryObj<ToolBarComponent>;



export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

  },
};

export const SingleRowWithLeadingIcon: Story = {
  args: {
    toolBarRows: [
      {
        leadingIcon: 'menu',
        title: 'Menu',
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = await canvas.findByText('Menu');
    expect(title).toBeTruthy();
  },
};

export const SingleRowWithTrailingIcons: Story = {
  args: {
    toolBarRows: [
      {
        title: 'Menu',
        trailingIcons: ['search', 'more_vert'],
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = await canvas.findByText('Menu');
    expect(title).toBeTruthy();
  },
};

export const SingleRowWithLeadingAndTrailingIcons: Story = {
  args: {
    toolBarRows: [
      {
        leadingIcon: 'menu',
        title: 'Menu',
        trailingIcons: ['search', 'more_vert'],
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = await canvas.findByText('Menu');
    expect(title).toBeTruthy();
  },
};

export const MultipleRows: Story = {
  args: {
    toolBarRows: [
      {
        leadingIcon: 'menu',
        title: 'Menu',
        trailingIcons: ['search', 'more_vert'],
      },
      {
        leadingIcon: 'home',
        title: 'Home',
        trailingIcons: ['search', 'more_vert'],
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = await canvas.findByText('Menu');
    expect(title).toBeTruthy();
  },
};

export const RowWithSingleTrailingIcon: Story = {
  args: {
    toolBarRows: [
      {
        title: 'Menu',
        trailingIcons: ['search'],
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = await canvas.findByText('Menu');
    expect(title).toBeTruthy();
  },
};

export const ToolBarWithOnlyIcons: Story = {
  args: {
    toolBarType: 'only-icons',
    onlyIconsList: [
      'home',
      'more_vert',
      'search',
      'cancel'
    ]
  }
}
