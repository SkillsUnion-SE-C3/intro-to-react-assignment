import { render } from '@testing-library/react';
import Products from './Products';

test('renders a div as cointaining element', () => {
  const container = render(<Products />);
  expect(container.container.children[0].nodeName).toBe('DIV');
});

test('sets container as the className of containing div', () => {
  const container = render(<Products />);
  expect(container.container.children[0].className).toBe('container');
});

test('renders an h2 as the first child of the containing div', () => {
  const container = render(<Products />);
  expect(container.container.children[0].firstElementChild.nodeName).toBe('H2');
});

test('h2 has a text Products List', () => {
  const container = render(<Products />);
  expect(container.container.children[0].firstElementChild.textContent).toBe('Product List');
});

test('renders name and price for each product', () => {
  const container = render(<Products />);
  expect(container.getByText("Sony headphones")).toBeTruthy();
  expect(container.getByText("MacBook Pro")).toBeTruthy();
  expect(container.getByText("LG Monitor")).toBeTruthy();

  expect(container.getByText("180")).toBeTruthy();
  expect(container.getByText("2000")).toBeTruthy();
  expect(container.getByText("120")).toBeTruthy();
});

