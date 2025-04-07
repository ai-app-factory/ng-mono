import type { Meta, StoryObj } from '@storybook/angular';
import { TimelineComponent } from './timeline.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TimelineComponent> = {
  component: TimelineComponent,
  title: 'TimelineComponent',
  argTypes: {
    layout: {
      control: {
        type: 'select',
        options: ['HORIZONTAL', 'VERTICAL'],
      },
      defaultValue: 'HORIZONTAL',
    },
    steps: {
      control: {
        type: 'object',
      },
      defaultValue: [
        {
          title: 'Step 1',
          description: 'Description for step 1',
          header: 'Header for step 1',
          state: 'NOT_STARTED',
        },
        {
          title: 'Step 2',
          description: 'Description for step 2',
          header: 'Header for step 2',
          state: 'CURRENT',
        },
        {
          title: 'Step 3',
          description: 'Description for step 3',
          header: 'Header for step 3',
          state: 'SUCCESS',
        },
        {
          title: 'Step 4',
          description: 'Description for step 4',
          header: 'Header for step 4',
          state: 'ERROR',
        },
        {
          title: 'Step 5',
          description: 'Description for step 5',
          header: 'Header for step 5',
          state: 'PROCESSING',
        },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<TimelineComponent>;

export const Primary: Story = {
  args: {
    layout: 'VERTICAL',
    steps: [
      {
        title: 'Step 1',
        description: 'Description for step 1',
        header: 'Header for step 1',
        state: 'NOT_STARTED',
      },
      {
        title: 'Step 2',
        description: 'Description for step 2',
        header: 'Header for step 2',
        state: 'CURRENT',
      },
      {
        title: 'Step 3',
        description: 'Description for step 3',
        header: 'Header for step 3',
        state: 'SUCCESS',
      },
      {
        title: 'Step 4',
        description: 'Description for step 4',
        header: 'Header for step 4',
        state: 'ERROR',
      },
      {
        title: 'Step 5',
        description: 'Description for step 5',
        header: 'Header for step 5',
        state: 'PROCESSING',
      },
    ],
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/timeline works!/gi)).toBeTruthy();
  },
};
