import type { Meta, StoryObj } from '@storybook/angular';
import { AccordianComponent } from './accordian.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<AccordianComponent> = {
  component: AccordianComponent,
  title: 'AccordianComponent',
};
export default meta;
type Story = StoryObj<AccordianComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/accordian works!/gi)).toBeTruthy();
  },
};
