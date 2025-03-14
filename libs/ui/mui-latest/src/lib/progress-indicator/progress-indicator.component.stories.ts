import type { Meta, StoryObj } from '@storybook/angular';
import { ProgressIndicatorComponent } from './progress-indicator.component';
import { within } from '@storybook/testing-library';

/**
 * Enhanced `ProgressIndicatorComponent` which combines Material `ProgressSpinnerModule` and `ProgressBarModule`
 * Use parameter `progressIndicatorType` to switch between spinner and bar
 */
const meta: Meta<ProgressIndicatorComponent> = {
  component: ProgressIndicatorComponent,
  title: 'ProgressIndicatorComponent',
  argTypes: {
    progressIndicatorType: {
      options: ['bar', 'spinner'],
      control: {type: 'select'},
      description: 'Whether the component is a progress bar or spinner',
      table: {
        defaultValue: {
          summary: 'bar'
        },
        type: {
          summary: 'bar | spinner'
        }
      }
    },
    progressBarMode: {
      options: ['determinate', 'indeterminate', 'query', 'buffer'],
      control: {
        type: 'select',
      },
      description: 'type of progress bar',
      table: {
        defaultValue: {summary: 'indeterminate'},
        type: {summary: 'determinate | indeterminate | query | buffer'}
      }
    },
    diameter: {
      control: {type: 'number'},
      description: 'Diameter of the progress spinner',
      table: {
        defaultValue: {summary: '40'},
        type: {summary: 'number'}
      },

    },
    strokeWidth: {
      control: {type: 'number'},
      description: 'Width of the progress spinner',
      table: {
        defaultValue: {summary: '1'},
        type: {summary: 'number'}
      },
    },
    progressSpinnerMode: {
      options: ['determinate', 'indeterminate'],
      control: {type: 'radio'},
      description: 'Type of the progress spinner',
      table: {
        defaultValue: {summary: 'indeterminate'},
        type: {summary: 'determinate | indeterminate'}
      }
    },
    value: {
      control: {type: 'number'},
      description: 'Length of the progress bar',
      table: {
        defaultValue: {summary: '90'},
        type: {summary: 'number'}
      },
    }
  }
};
export default meta;
type Story = StoryObj<ProgressIndicatorComponent>;

export const Primary: Story = {
  args: {},
};

export const IndeterminateSpinner: Story = {
  args: {
    progressIndicatorType: 'spinner',
    progressSpinnerMode: 'indeterminate',
  },
};

export const IndeterminateBar: Story = {
  args: {
    progressIndicatorType: 'bar',
    progressBarMode: 'indeterminate',
  },
};

export const DeterminateBar: Story = {
  args: {
    progressIndicatorType: 'bar',
    progressBarMode: 'determinate',
    value: 50,
  },
};

export const DeterminateSpinner: Story = {
  args: {
    progressIndicatorType: 'spinner',
    progressSpinnerMode: 'determinate',
    value: 50,
  },
};

export const QueryBar: Story = {
  args: {
    progressIndicatorType: 'bar',
    progressBarMode: 'query',
    value: 50,
  },
};

export const BufferBar: Story = {
  args: {
    progressIndicatorType: 'bar',
    progressBarMode: 'buffer',
    value: 50,
    bufferValue: 75,
  },
};

export const SpinnerWithDiameter100: Story = {
  args: {
    progressIndicatorType: 'spinner',
    progressSpinnerMode: 'indeterminate',
    diameter: 100,
    strokeWidth: 5,
  },
};

export const SpinnerWithDiameter200StrokeWidth10: Story = {
  args: {
    progressIndicatorType: 'spinner',
    progressSpinnerMode: 'indeterminate',
    diameter: 200,
    strokeWidth: 10,
  },
};
