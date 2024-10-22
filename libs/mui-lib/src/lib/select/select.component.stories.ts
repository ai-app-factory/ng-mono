import type { Meta, StoryObj } from '@storybook/angular';
import { SelectComponent } from './select.component';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SelectComponent> = {
  component: SelectComponent,
  title: 'SelectComponent',
};
export default meta;
type Story = StoryObj<SelectComponent>;


export const Primary: Story = {
  args: {
    list: [
      'Apple',
      'Banana',
      'Cherry',
      'Date',
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const selectElement = canvas.getByRole('combobox');
    expect(selectElement).toBeTruthy();
  },
};
