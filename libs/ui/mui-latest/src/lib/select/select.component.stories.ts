import type { Meta, StoryObj } from '@storybook/angular';
import { SelectComponent } from './select.component';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<SelectComponent> = {
  component: SelectComponent,
  title: 'SelectComponent',
  argTypes: {
    disabled: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<SelectComponent>;

export const BasicSelect: Story = {
  args: {
    label: 'Select an option',
    placeholder: 'Please select an option',
  },
};


export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithMultipleSelections: Story = {
  args: {
    multiple: true,
  },
};

export const WithDisabledOptions: Story = {
  args: {
    groups: [
      { id: 1, value: 'Apple' },
      { id: 2, value: 'Banana', disabled: true },
      { id: 3, value: 'Cherry' },
      { id: 4, value: 'Date', disabled: true },
    ],
  },
};

export const WithDynamicTriggerText: Story = {
  args: {
    label: 'Select an option',
    placeholder: 'Please select an option',
    multiple: true, // Enable multiple selection
    customTriggerText: true, // Enable custom trigger text
    groups: [
      { id: 1, value: 'Apple' },
      { id: 2, value: 'Banana' },
      { id: 3, value: 'Cherry' },
      { id: 4, value: 'Date' },
    ],
  },
};


export const WithGroups: Story = {
  args: {
    option: 'nested',
    groups: [
      {
        id: 1,
        value: 'Grass',
        groups: [
          { id: 2, value: 'Bulbasaur' },
          { id: 3, value: 'Oddish' },
        ],
      },
      {
        id: 4,
        value: 'Fire',
        groups: [
          { id: 5, value: 'Charmander' },
          { id: 6, value: 'Vulpix' },
        ],
      },
      {
        id: 7,
        value: 'Water',
        groups: [
          { id: 8, value: 'Squirtle' },
          { id: 9, value: 'Psyduck' },
        ],
      },
      {
        id: 10,
        value: 'Electric',
        groups: [
          { id: 11, value: 'Pikachu' },
          { id: 12, value: 'Jolteon' },
        ],
        disabled: true,
      }
    ],
  },
};

