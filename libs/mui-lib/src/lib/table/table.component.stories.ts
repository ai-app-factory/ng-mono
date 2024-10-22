import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { TableComponent } from './table.component';
import { PeriodicElement, ELEMENT_DATA } from './models/element-data';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TableComponent> = {
  component: TableComponent,
  title: 'TableComponent',
  argTypes: {
    displayedColumns: {
      control: {
        type: 'object',
      },
    },
    dataSource: {
      control: {
        type: 'object',
      },
    },
  },

};
export default meta;
type Story = StoryObj<TableComponent>;

export const Primary: Story = {
  args: {
  },

};


