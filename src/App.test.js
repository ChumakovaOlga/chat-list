import { render, screen } from '@testing-library/react';
import Chats from './components/Chats/Chats';

test('renders learn react link', () => {
  render(<Chats />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
