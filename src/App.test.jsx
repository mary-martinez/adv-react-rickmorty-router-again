import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { CharacterProvider } from './context/CharacterContext';
import userEvent from '@testing-library/user-event';

describe('tests App', () => {
  it('checks for loading, then rendered list, then navigation to a details page', async () => {
    render(
      <CharacterProvider>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </CharacterProvider>
    );
    screen.getByText(/loading/i);
    const name = await screen.findByText('Rick Sanchez');
    expect(name).toBeInTheDocument();
    userEvent.click(name);
  });
  it('checks for loading, then render a character', async () => {
    render(
      <CharacterProvider>
        <MemoryRouter
          initialEntries={['/', '/character/2', '/character/1']}
          initialIndex={1}
        >
          <App />
        </MemoryRouter>
      </CharacterProvider>
    );

    screen.getByText(/loading/i);
    const imageDesc = await screen.findByAltText(/Morty Smith/i);
    expect(imageDesc).toBeInTheDocument();

    const home = screen.getByRole('button');
    expect(home).toBeInTheDocument();

    userEvent.click(home);

    const links = await screen.findAllByRole('link');
    expect(links.length).toEqual(20);
  });
});

