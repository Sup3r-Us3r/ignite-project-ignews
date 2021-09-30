import { render, screen, fireEvent } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { signIn, signOut, useSession } from 'next-auth/client';
import { SignInButton } from '.';

jest.mock('next-auth/client');

describe('SignInButton component', () => {
  it('renders correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce([null, false]);

    render(
      <SignInButton />
    );

    expect(screen.getByText('Sign in with GitHub')).toBeInTheDocument();
  });

  it('renders correctly when user is authenticated', () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce([
      {
        user: {
          name: 'John Doe',
          email: 'johndoe@mail.com',
          image: 'johndoe image',
        },
      },
      false,
    ]);

    render(
      <SignInButton />
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('when user is authenticated click on signOut function', () => {
    const useSessionMocked = mocked(useSession);
    const signOutMock = mocked(signOut);

    useSessionMocked.mockReturnValueOnce([
      {
        user: {
          name: 'John Doe',
          email: 'johndoe@mail.com',
          image: 'johndoe image',
        },
      },
      false,
    ]);

    render(
      <SignInButton />
    );

    const signOutButton = screen.getByText('John Doe');

    fireEvent.click(signOutButton);

    expect(signOutMock).toHaveBeenCalled();
  });

  it('when user is not authenticated click on signIn function', () => {
    const useSessionMocked = mocked(useSession);
    const signInMock = mocked(signIn);

    useSessionMocked.mockReturnValueOnce([null, false]);

    render (
      <SignInButton />
    );

    const signInButton = screen.getByText('Sign in with GitHub');

    fireEvent.click(signInButton);

    expect(signInMock).toBeCalledWith('github');
  });
});
