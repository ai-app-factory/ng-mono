import type { Meta, StoryObj } from '@storybook/angular';
import { RadioButtonComponent } from './radio-button.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<RadioButtonComponent> = {
  component: RadioButtonComponent,
  title: 'RadioButtonComponent',
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    name: {
      control: {
        type: 'text',
      },
    },

    labelPosition: {
      control: {
        type: 'inline-radio',
        options: ['before', 'after'],
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
    value: {
      control: {
        type: 'text',
      },
    },
    displaySelectedOption: {
      control: {
        type: 'boolean',
      },
    },
    displayGroupName: {
      control: {
        type: 'boolean',
      },
    },
    listOfOptions: {
      control: {
        type: 'object',
      },
    },

  },
};
export default meta;
type Story = StoryObj<RadioButtonComponent>;

export const Primary: Story = {
  args: {
    name: 'Radio Group',
    listOfOptions: ['Option 1', 'Option 2', 'Option 3'],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Option 1')).toBeTruthy();
  },
};

export const CustomLabels: Story = {
  args: {
    name: 'New Radio Group',
    listOfOptions: ['Option A', 'Option B', 'Option C'],
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Option 1")).toBeTruthy();
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    name: 'Disabled Radio Group',
    listOfOptions: ['Option 1', 'Option 2', 'Option 3'],
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Option 1")).toBeTruthy();
  }
};

export const Required: Story = {
  args: {
    required: true,
    name: 'Required Radio Group',
    listOfOptions: ['Option 1', 'Option 2', 'Option 3'],
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Option 1")).toBeTruthy();
  }
};

export const DisplaySelectedOption: Story = {
  args: {
    displaySelectedOption: true,
    name: 'Radio Group',
    listOfOptions: ['Option 1', 'Option 2', 'Option 3'],
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Option 1")).toBeTruthy();
  }
};

export const DisplayGroupName: Story = {
  args: {
    displayGroupName: true,
    name: 'Radio Group Name',
    listOfOptions: ['Option 1', 'Option 2', 'Option 3'],
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Option 1")).toBeTruthy();
  }
};

export const BeforeLabel: Story = {
  args: {
    labelPosition: 'before',
    name: 'Radio Group',
    listOfOptions: ['Option 1', 'Option 2', 'Option 3'],
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Option 1")).toBeTruthy();
  }
};

export const AfterLabel: Story = {
  args: {
    labelPosition: 'after',
    name: 'Radio Group',
    listOfOptions: ['Option 1', 'Option 2', 'Option 3'],
  },

  play: async (
    {
      canvasElement
    }
  ) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Option 1")).toBeTruthy();
  }
};
