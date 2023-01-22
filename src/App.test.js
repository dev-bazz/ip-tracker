import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug()
  const text = screen.getByText("Hello World")
  
  expect(text).toBeInTheDocument()
});
