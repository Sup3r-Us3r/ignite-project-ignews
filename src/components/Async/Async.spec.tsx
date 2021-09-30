import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { Async } from '.';

describe('Async component', () => {
  it('renders correctly', async () => {
    render(
      <Async />
    );

    expect(screen.getByText('Hello World')).toBeInTheDocument();
    // expect(await screen.findByText('Button')).toBeInTheDocument();

    screen.logTestingPlaygroundURL();

    // queryByText - Síncrono | Se não encontrar não irá dar erro
    // getByText - Síncrono | Se não encontrar irá dar erro
    // findByText - Assíncrono | Se não encontrar irá dar erro

    await waitForElementToBeRemoved(
      screen.queryByText('Button Invisible'), {
        timeout: 3000,
      },
    );

    await waitFor(() => {
      return expect(screen.getByText('Button')).toBeInTheDocument();
    }, {
      timeout: 3000,
    });
  });
});
