import type { Meta, StoryObj } from '@storybook/angular';
import { AccordianComponent } from './accordian.component';

const meta: Meta<AccordianComponent> = {
  component: AccordianComponent,
  title: 'AccordianComponent',
  argTypes: {
    MultiPanel: {
      control: 'boolean',
      description: 'Allow multiple panels to be open at the same time',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    HeadingLevel: {
      control: 'number',
      description: 'Heading level for panel titles',
      table: {
        type: { summary: '1 | 2 | 3 | 4 | 5 | 6' },
        defaultValue: { summary: '2' },
      },
    },
    HeadingEnabled: {
      control: 'boolean',
      description: 'Enable heading role for panel headers',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    AccordionDisabled: {
      control: 'boolean',
      description: 'Disable all panels',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    panels: {
      control: 'object',
      description: 'Panels data',
      table: {
        type: { summary: 'Panel[]' },
        defaultValue: { summary: '[]' },
      },
    },
  },
};
export default meta;
type Story = StoryObj<AccordianComponent>;

export const SinglePanelOpen: Story = {
  args: {
    MultiPanel: false,
    panels: [
      { title: 'Panel 1', content: 'Content 1', isOpen: true, isDisabled: false },
      { title: 'Panel 2', content: 'Content 2', isOpen: false, isDisabled: false },
    ],
  },
};

export const MultiplePanelsOpen: Story = {
  args: {
    MultiPanel: true,
    panels: [
      { title: 'Panel 1', content: 'Content 1', isOpen: true, isDisabled: false },
      { title: 'Panel 2', content: 'Content 2', isOpen: true, isDisabled: false },
      { title: 'Panel 3', content: 'Content 3', isOpen: false, isDisabled: false },
    ],
  },
};

export const WithPanelDescription: Story = {
  args: {
    panels: [
      {
        title: 'Panel 1',
        content: 'Content 1',
        description: 'Description 1',
        showDescription: true,
        isOpen: true,
        isDisabled: false,
      },
      {
        title: 'Panel 2',
        content: 'Content 2',
        description: 'Description 2',
        showDescription: true,
        isOpen: false,
        isDisabled: false,
      },
    ],
  },
};

export const PanelClosed: Story = {
  args: {
    panels: [
      { title: 'Panel 1', content: 'Content 1', isOpen: false, isDisabled: false },
      { title: 'Panel 2', content: 'Content 2', isOpen: false, isDisabled: false },
    ],
  },
};

export const PanelOpenDisabled: Story = {
  args: {
    panels: [
      { title: 'Panel 1', content: 'Content 1', isOpen: true, isDisabled: true },
      { title: 'Panel 2', content: 'Content 2', isOpen: false, isDisabled: false },
    ],
  },
};

export const PanelClosedDisabled: Story = {
  args: {
    panels: [
      { title: 'Panel 1', content: 'Content 1', isOpen: false, isDisabled: true },
      { title: 'Panel 2', content: 'Content 2', isOpen: false, isDisabled: true },
    ],
  },
};

export const NestedAccordion: Story = {
  args: {
    MultiPanel: true,
    panels: [
      {
        title: 'Parent Panel 1',
        content: 'Parent Content 1',
        isOpen: true,
        isDisabled: false,
        children: [
          {
            title: 'Nested Panel 1',
            content: 'Nested Content 1',
            isOpen: false,
            isDisabled: false,
          },
          {
            title: 'Nested Panel 2',
            content: 'Nested Content 2',
            isOpen: false,
            isDisabled: false,
          },
        ],
      },
      {
        title: 'Parent Panel 2',
        content: 'Parent Content 2',
        isOpen: false,
        isDisabled: false,
      },
    ],
  },
};