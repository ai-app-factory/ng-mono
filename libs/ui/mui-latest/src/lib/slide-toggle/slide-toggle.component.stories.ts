import type { Meta, StoryObj } from '@storybook/angular';
import { SlideToggleComponent } from './slide-toggle.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * `SlideToggleComponent` which is enhanced version of `MatSlideToggle`
 * It also includes `FormGroup` and `FormControl` for reactive forms
 */
const meta: Meta<SlideToggleComponent> = {
  component: SlideToggleComponent,
  title: 'SlideToggleComponent',
};
export default meta;
type Story = StoryObj<SlideToggleComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/slide-toggle works!/gi)).toBeTruthy();
  },
};
