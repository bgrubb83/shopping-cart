import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
});

it('renders the Shop link', () => {
  const { getByText } = render(<App />);
  const shopLinkElement = getByText(/Shop/);
  expect(shopLinkElement).toBeInTheDocument();
});

it('renders the Add to Cart buttons', () => {
  const { getAllByText } = render(<App />);
  const CartLinkElement = getAllByText(/Add to Cart/);
  expect(CartLinkElement).not.toBeUndefined();
});

