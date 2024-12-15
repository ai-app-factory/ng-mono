import type { Meta, StoryObj } from '@storybook/angular';
import { MenuComponent } from './menu.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<MenuComponent> = {
  component: MenuComponent,
  title: 'MenuComponent',
  argTypes: {
    menuTitle: {
      control: 'text',
      description: 'The title of the menu',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Menu' },
      }
    },
    menuIcon: {
      control: 'text',
      description: 'The icon of the menu',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'more_vert' },
      }
    },
    menuOnIcon: {
      control: 'boolean',
      description: 'Is the menu on the icon or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      }
    },
    

  },
};
export default meta;
type Story = StoryObj<MenuComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/menu works!/gi)).toBeTruthy();
  },
};
