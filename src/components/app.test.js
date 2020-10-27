import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from './app';

afterEach(cleanup)

describe('App', () => {

  test('renders App', () => {
    
    render(<App />)
    // screen.debug()

    expect(screen.getByTestId('restool')).toBeInTheDocument();
    
  });

});



