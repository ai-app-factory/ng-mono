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
  },
};


export default meta;
type Story = StoryObj<MenuComponent>;

export const BasicMenu: Story = {
  args: {
    menus: [
      {
        label: 'HomePage',
      },
      {
        label: 'About Us',
      },
      {
        label: 'Contact Us',
      }
    ]
  },
};

export const MenuWithIcons: Story = {
  args: {
    menuType: 'icon',
    menus: [
      {
        label: 'HomePage',
        icon: 'home',
      },
      {
        label: 'Check voice mail',
        icon: 'voicemail',
        disabled: true,
      },
      {
        label: 'Disable alerts',
        icon: 'notifications_off',
      }
    ]
  },
};
