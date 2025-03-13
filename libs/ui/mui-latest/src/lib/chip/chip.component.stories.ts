import type { Meta, StoryObj } from '@storybook/angular';
import { ChipComponent } from './chip.component';
import { within } from '@storybook/testing-library';

/**
 * This `ChipComponent` is an enhanced version of the Angular Material Chip component.
 * It combines features like drag and drop, editable, and selectable chips with `FormControl`
 * support for reactive forms.
 *
 * It uses a `writeableSignal` to populate the chips.
 */
const meta: Meta<ChipComponent> = {
  component: ChipComponent,
  title: 'ChipComponent',
};
export default meta;
type Story = StoryObj<ChipComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/chip works!/gi)).toBeTruthy();
  },
};
