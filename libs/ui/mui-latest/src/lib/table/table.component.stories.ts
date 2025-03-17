import type { Meta, StoryObj } from '@storybook/angular';
import { TableComponent } from './table.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { MatTableDataSource } from '@angular/material/table';

const meta: Meta<TableComponent> = {
  component: TableComponent,
  title: 'TableComponent',
  argTypes: {
    displayedColumns: {
      control: {
        type: 'object',
      },
      description: 'The columns to display in the table',
      table: {
        defaultValue: {
          summary: 'position, name, weight, symbol',
        },
        type: {
          summary: 'string[]',
        }
      }
    },
    withPaginator: {
      control: {
        type: 'boolean',
      },
      description: 'Whether to display the paginator',
      table: {
        defaultValue: {
          summary: 'true',
        },
        type: {
          summary: 'boolean',
        }
      }
    },
    pageSizeOptions: {
      control: {
        type: 'object',
      },
      description: 'The page size options for the paginator',
      table: {
        defaultValue: {
          summary: '5, 10, 20, 30',
        },
        type: {
          summary: 'number[]',
        }
      }
    },
    dataSource: {
      control: {
        type: 'object',
      },
      description: 'The data source for the table',
      table: {
        defaultValue: {
          summary: 'ELEMENT_DATA',
        },
        type: {
          summary: 'MatTableDataSource<any>',
        }
      }
    },
  }
};
export default meta;
type Story = StoryObj<TableComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};

export const WithoutPaginator: Story = {
  args: {
    withPaginator: false
  }
};



export const WithCustomPageSizeOptions: Story = {
  args: {
    pageSizeOptions: [10, 20, 30]
  }
};

interface CustomTable {
  SrNo: number;
  Name: string;
  Age: number;
  Gender: string;
}

const customData: CustomTable[] = [
  { SrNo: 1, Name: 'John Doe', Age: 20, Gender: 'Male' },
  { SrNo: 2, Name: 'Jane Doe', Age: 21, Gender: 'Female' },
  { SrNo: 3, Name: 'John Smith', Age: 25, Gender: 'Male'  },
  { SrNo: 4, Name: 'Jane Smith', Age: 26, Gender: 'Female' }
];

export const WithCustomData: Story = {
  args: {
    dataSource: new MatTableDataSource<CustomTable>(customData),
    displayedColumns: ['SrNo', 'Name', 'Age', 'Gender'],
  }
};
