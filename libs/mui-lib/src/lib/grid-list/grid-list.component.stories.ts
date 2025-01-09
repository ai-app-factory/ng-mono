import type { Meta, StoryObj } from '@storybook/angular';
import { GridListComponent } from './grid-list.component';

const meta: Meta<GridListComponent> = {
  component: GridListComponent,
  title: 'GridListComponent',
  argTypes: {
    columns: {
      control: 'text',
      description: 'Number of columns',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '4' },
      },
    },
    rowHeight: {
      control: 'text',
      description: 'Height of each row',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '100px' },
      },
    },
  },
};
export default meta;
type Story = StoryObj<GridListComponent>;

export const Primary: Story = {
  args: {},
};
