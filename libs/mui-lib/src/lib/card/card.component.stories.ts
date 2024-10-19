import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'CardComponent',
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    content: { control: 'text' },
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
    expect(canvas.getByText("Card Title")).toBeTruthy();
  },
};

export const ChangedSubtitle: Story = {
  args: {
    subtitle: "changed subtitle"
  }
};

export const ChangedTitle: Story = {
  args: {
    subtitle: "changed subtitle",
    title: "ChangedTitle"
  }
};
