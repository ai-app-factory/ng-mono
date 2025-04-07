import type { Meta, StoryObj } from '@storybook/angular';
import { TimelineComponent } from './timeline.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TimelineComponent> = {
  component: TimelineComponent,
  title: 'TimelineComponent',
  argTypes: {
    layout: {
      control: 'select',
      options: ['HORIZONTAL', 'VERTICAL'],
      description: 'Layout of the timeline',
      table: {
        type: { summary: "'HORIZONTAL' | 'VERTICAL'" },
        defaultValue: { summary: "'HORIZONTAL'" },
      },
    },
    steps: {
      control: 'object',
      description: 'Array of timeline steps',
      table: {
        type: { summary: 'TimelineStep[]' },
        defaultValue: { summary: '[]' },
      },
    },
  }
}

export default meta;
type Story = StoryObj<TimelineComponent>;

export const HorizontalTimeline: Story = {
  args: {
    layout: 'HORIZONTAL',
    steps: [
      {
        title: 'Success',
        description: 'This is step was successful.',
        header: 'Step 1',
        state: 'SUCCESS',
      },
      {
        title: 'Error',
        description: 'There was an error in this step.',
        header: 'Step 2',
        state: 'ERROR',
      },
      {
        title: 'Processing',
        description: 'We are processing this step.',
        header: 'Step 3',
        state: 'PROCESSING',
      },
      {
        title: 'Current',
        description: 'You are here.',
        header: 'Step 4',
        state: 'CURRENT',
      },
      {
        title: 'Not Started',
        description: 'You have not started this step yet.',
        header: 'Step 4',
        state: 'NOT_STARTED',
      },
    ],
  },
};

export const VerticalTimeline: Story = {
  args: {
    layout: 'VERTICAL',
    steps: [
      {
        title: 'Success',
        description: 'This is step was successful.',
        header: 'Step 1',
        state: 'SUCCESS',
      },
      {
        title: 'Error',
        description: 'There was an error in this step.',
        header: 'Step 2',
        state: 'ERROR',
      },
      {
        title: 'Processing',
        description: 'We are processing this step.',
        header: 'Step 3',
        state: 'PROCESSING',
      },
      {
        title: 'Current',
        description: 'You are here.',
        header: 'Step 4',
        state: 'CURRENT',
      },
      {
        title: 'Not Started',
        description: 'You have not started this step yet.',
        header: 'Step 4',
        state: 'NOT_STARTED',
      },
    ],
  },
};
