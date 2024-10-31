import type { Meta, StoryObj } from '@storybook/angular';
import { CourseInfoComponent } from './course-info.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<CourseInfoComponent> = {
  component: CourseInfoComponent,
  title: 'CourseInfoComponent',
};
export default meta;
type Story = StoryObj<CourseInfoComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/course-info works!/gi)).toBeTruthy();
  },
};
