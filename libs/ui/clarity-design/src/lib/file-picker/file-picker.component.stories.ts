import type { Meta, StoryObj } from '@storybook/angular';
import { FilePickerComponent } from './file-picker.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<FilePickerComponent> = {
  component: FilePickerComponent,
  title: 'FilePickerComponent',
};
export default meta;
type Story = StoryObj<FilePickerComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/file-picker works!/gi)).toBeTruthy();
  },
};
