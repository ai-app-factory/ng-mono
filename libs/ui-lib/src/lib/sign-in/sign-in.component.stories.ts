import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { SignInComponent } from './sign-in.component';
import { AUTH } from './auth.token';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const mockAuth = {
  signInWithEmailAndPassword: jest.fn().mockResolvedValue({ user: { uid: '12345' } }),
  createUserWithEmailAndPassword: jest.fn().mockResolvedValue({ user: { uid: '12345' } }),
  signInWithPopup: jest.fn().mockResolvedValue({ user: { uid: '12345' } }),
};
const meta: Meta<SignInComponent> = {
  component: SignInComponent,
  title: 'SignInComponent',
  decorators: [
    moduleMetadata({
      providers: [{ provide: AUTH, useValue: mockAuth }],
    }),
  ]
};
export default meta;
type Story = StoryObj<SignInComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/sign-in works!/gi)).toBeTruthy();
  },
};
