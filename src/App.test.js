import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const text = screen.getByText('Hello World')
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug()
  expect(text).toBeInTheDocument()
});
