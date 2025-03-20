import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      description: 'The label for the button',
      table: {
        defaultValue: {
          summary: 'Button with Tailwind',
        },
        type: {
          summary: 'string',
        }
      }
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Disables the button',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        }
      }
    },
    disableRipple: {
      control: {
        type: 'boolean',
      },
      description: 'Disables the ripple effect',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        }
      }
    },
    disabledInteractive: {
      control: {
        type: 'boolean',
      },
      description: 'Disables the interactive state',
      table: {
        defaultValue: {
          summary: 'false',
        },
        type: {
          summary: 'boolean',
        },
      },
    },
    icon: {
      control: {
        type: 'text',
      },
      description: 'The icon for the button',
      table: {
        defaultValue: {
          summary: 'home',
        },
        type: {
          summary: 'string',
        },
      },
    },
    buttonType: {
      options: ['raised', 'flat', 'stroked', 'fab', 'extended-fab'],
      control: {
        type: 'select',
      },
      description: 'The type of button',
      table: {
        defaultValue: {
          summary: 'raised',
        },
        type: {
          summary: 'raised | flat | stroked | fab | extended-fab',
        },
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select',
      },
      description: 'The size of the button',
      table: {
        defaultValue: {
          summary: 'medium',
        },
        type: {
          summary: 'small | medium | large',
        },
      },
    },
    shape: {
      options: ['pill', 'round', 'rectangle'],
      control: {
        type: 'select',
      },
      description: 'The shape of the button',
      table: {
        defaultValue: {
          summary: 'pill',
        },
        type: {
          summary: 'pill | round | rectangle',
        },
      },
    },
    color: {
      options: ['primary', 'accent', 'warn'],
      control: {
        type: 'select',
      },
      description: 'The color of the button',
      table: {
        defaultValue: {
          summary: 'primary',
        },
        type: {
          summary: 'primary | accent | warn',
        },
      },
    },
    onButtonClick: {
      action: 'onButtonClick',
      description: 'The function to call when the button is clicked',
      table: {
        type: {
          summary: '() => any',
        },
      },
    },
  }
};
export default meta;
type Story = StoryObj<ButtonComponent>;


export const PillShape: Story = {
  args: {
    shape: 'pill',
    color: 'primary',
  }
}
