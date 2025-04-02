import type { Meta, StoryObj } from '@storybook/angular';
import { ClarityDesignComponent } from './clarity-design.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ClarityDesignComponent> = {
  component: ClarityDesignComponent,
  title: 'ClarityDesignComponent',
};
export default meta;
type Story = StoryObj<ClarityDesignComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/clarity-design works!/gi)).toBeTruthy();
  },
};
