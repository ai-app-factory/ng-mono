import type { Meta, StoryObj } from '@storybook/angular';
import { TabsComponent } from './tabs.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TabsComponent> = {
  component: TabsComponent,
  title: 'TabsComponent',
};
export default meta;
type Story = StoryObj<TabsComponent>;

export const Primary: Story = {
  args: {
    tabs: [
      { label: 'First', content: 'Content 1' },
      { label: 'Second', content: 'Content 2' },
      { label: 'Third', content: 'Content 3' },
    ],
  },
};

export const Heading: Story = {
  args: {
    tabs: [
      { label: 'First', content: 'Content 1' },
      { label: 'Second', content: 'Content 2' },
      { label: 'Third', content: 'Content 3' },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/tabs works!/gi)).toBeTruthy();
  },
};