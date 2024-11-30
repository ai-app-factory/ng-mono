import type { Meta, StoryObj } from '@storybook/angular';
import { ProgressBarSpinnerComponent } from './progress-bar-spinner.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

/**
 * Component which renders either `ProgressBar`
 * or `ProgressSpinner` according to inputs
 */
const meta: Meta<ProgressBarSpinnerComponent> = {
  component: ProgressBarSpinnerComponent,
  title: 'ProgressBarSpinnerComponent',
  argTypes: {
    progressType: {
      options: ['bar', 'spinner'],
      control: {type: 'radio'},
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
        type: 'radio',
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
type Story = StoryObj<ProgressBarSpinnerComponent>;


export const DeterminateProgressBar: Story = {
  args: {
    progressType: 'bar',
    progressBarMode: 'determinate',
    value: 50,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('progressbar')).toBeTruthy();
  },
};

export const IndeterminateProgressBar: Story = {
  args: {
    progressType: 'bar',
    progressBarMode: 'indeterminate',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('progressbar')).toBeTruthy();
  },
};

export const ProgressBarWithBuffer: Story = {
  args: {
    progressType: 'bar',
    progressBarMode: 'buffer',
    value: 50,
    bufferValue: 90,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('progressbar')).toBeTruthy();
  },
};

export const ProgressBarWithQuery: Story = {
  args: {
    progressType: 'bar',
    progressBarMode: 'query',
    value: 50
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('progressbar')).toBeTruthy();
  },
};

export const DeterminateProgressSpinner: Story = {
  args: {
    progressType: 'spinner',
    progressSpinnerMode: 'determinate',
    value: 50,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('progressbar')).toBeTruthy();
  },
};

export const IndeterminateProgressSpinner: Story = {
  args: {
    progressType: 'spinner',
    progressSpinnerMode: 'indeterminate',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('progressbar')).toBeTruthy();
  },
};

export const SpinnerWithStrokeWidth5: Story = {
  args: {
    progressType: "spinner",
    progressSpinnerMode: "indeterminate",
    strokeWidth: 5
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole("progressbar")).toBeTruthy();
  }
};

export const VeryBigDiameter: Story = {
  args: {
    progressType: "spinner",
    progressSpinnerMode: "indeterminate",
    strokeWidth: 5,
    diameter: 400
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole("progressbar")).toBeTruthy();
  }
};
