import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'CardComponent',
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the card',
      table: {
        defaultValue: { summary: 'Card Title' },
        type: { summary: 'string' },
      }
    },
    subTitle: {
      control: 'text',
      description: 'The subtitle of the card',
      table: {
        defaultValue: { summary: 'Card Subtitle' },
        type: { summary: 'string' },
      }
    },
    content: {
      control: 'text',
      description: 'The content of the card',
      table: {
        defaultValue: { summary: 'Card Content' },
        type: { summary: 'string' },
      }
    },
    cardImage: {
      control: 'text',
      description: 'The image of the card',
      table: {
        defaultValue: { summary: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
        type: { summary: 'string' },
      }
    },
    cardAppearance: {
      options: ['outlined', 'raised'],
      control: { type: 'radio' },
      description: 'The appearance of the card',
      table: {
        defaultValue: { summary: 'raised' },
        type: { summary: 'outlined | raised' },
      }
    },
    imageSize: {
      options: ['small', 'medium', 'large', 'extra-large'],
      control: { type: 'radio' },
      description: 'The size of the image',
      table: {
        defaultValue: { summary: 'medium' },
        type: { summary: 'small | medium | large | extra-large' },
      }
    },
    actions: {
      control: 'object',
      description: 'The actions of the card',
      table: {
        defaultValue: { summary: 'Action 1, Action 2' },
        type: { summary: 'ButtonComponent[]' },
      }
    },
    chips: {
      control: 'object',
      description: 'The chips of the card',
      table: {
        defaultValue: { summary: 'Chip 1, Chip 2' },
        type: { summary: 'ChipComponent[]' },
      }
    },
    cardType: {
      options: ['default', 'with-chips', 'with-buttons'],
      control: { type: 'radio' },
      description: 'The type of the card',
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: 'default | with-chips | with-buttons' },
      }
    }
  },
};
export default meta;
type Story = StoryObj<CardComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/card works!/gi)).toBeTruthy();
  },
};

export const CustomTitle: Story = {
  args: {
    title: "Shiba Inu",
    subTitle: ""
  }
};

export const CustomSubTitle: Story = {
  args: {
    title: "Shiba Inu",
    subTitle: "Is my favorite dog breed"
  }
};

export const ImageSizeSmall: Story = {
  args: {
    title: "Shiba Inu",
    subTitle: "Is my favorite dog breed",
    imageSize: "small"
  }
};

export const ImageSizeMedium: Story = {
  args: {
    title: "Shiba Inu",
    subTitle: "Is my favorite dog breed",
    imageSize: "medium"
  }
};

export const ImageSizeLarge: Story = {
  args: {
    title: "Shiba Inu",
    subTitle: "Is my favorite dog breed",
    imageSize: "large"
  }
};

export const ImageSizeExtraLarge: Story = {
  args: {
    title: "Shiba Inu",
    subTitle: "Is my favorite dog breed",
    imageSize: "extra-large"
  }
};

export const CustomContent: Story = {
  args: {
    title: "Shiba Inu",
    subTitle: "Is my favorite dog breed",
    imageSize: "extra-large",
    content: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting."
  }
};
