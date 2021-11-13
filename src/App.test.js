import { render } from '@testing-library/react';
import App from './App';

test('renders Product component', () => {
  const container = render(<App />);
  expect(container.container.firstElementChild.lastElementChild.className).toBe('container');
});
