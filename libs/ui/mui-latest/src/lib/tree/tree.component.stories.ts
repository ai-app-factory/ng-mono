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



export const FlatTree: Story = {
  args: {
    treeType: 'flat',
    nodes: [
      {
        name: 'Fruit',
        children: [
          { name: 'Apple' },
          { name: 'Banana' },
          { name: 'Fruit loops' },
        ],
      }, 
      {
        name: 'Vegetables',
        children: [
          {
            name: 'Green',
            children: [
              { name: 'Broccoli' },
              { name: 'Brussels sprouts' },
            ],
          }, {
            name: 'Orange',
            children: [
              { name: 'Pumpkins' },
              { name: 'Carrots' },
            ],
          }
        ],
      }
    ]
  },
};

export const NestedTree: Story = {
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
              { name: 'Bulldog' },
            ]
          }, {
            name: 'Cat',
            children: [
              { name: 'Siamese' },
              { name: 'Sub-Saharan' },
            ]
          }
        ]
      }
    ]
  },
};