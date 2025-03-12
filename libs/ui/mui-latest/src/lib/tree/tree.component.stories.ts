import type { Meta, StoryObj } from '@storybook/angular';
import { TreeComponent } from './tree.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TreeComponent> = {
  component: TreeComponent,
  title: 'TreeComponent',
  argTypes: {
    treeType: {
      control: 'radio',
      options: ['nested', 'flat'],
      description: 'The type of tree',
      table: {
        type: { summary: 'nested | flat' },
        defaultValue: { summary: 'nested' },
      },
    },
  },
};
export default meta;
type Story = StoryObj<TreeComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
};

export const Nested: Story = {
  args: {
    treeType: 'nested',
    nodes: [
      {
        name: 'Fruit',
        children: [
          { name: 'Apple' },
          { name: 'Banana' },
          { name: 'Fruit loops' },
        ]
      }, 
      {
        name: 'Animals',
        children: [
          {
            name: 'Dogs',
            children: [
              { name: 'Lab' },
              { name: 'Brreon sprouts' },
            ]
          }, {
            name: 'Orange',
            children: [
              { name: 'Pumpkins' },
              { name: 'Carrots' },
            ]
          }
        ]
      }
    ]
  },
};