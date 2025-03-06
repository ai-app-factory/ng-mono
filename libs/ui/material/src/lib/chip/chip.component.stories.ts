import type { Meta, StoryObj } from '@storybook/angular';
import { ChipComponent } from './chip.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ChipComponent> = {
  component: ChipComponent,
  title: 'ChipComponent',
};
export default meta;
type Story = StoryObj<ChipComponent>;

export const Primary: Story = {
  args: {
    disableRipple: false,
    hideSingleSelectionIndicator: false,
    multipleSelection: false,
    chipType: 'basic',
  },
};

export const Heading: Story = {
  args: {
    disableRipple: false,
    hideSingleSelectionIndicator: false,
    multipleSelection: false,
    chipType: 'basic',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/chip works!/gi)).toBeTruthy();
  },
};
