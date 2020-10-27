import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import AppWithAuth from './appWithAuth';

afterEach(cleanup)

describe('App With Auth ', () => {

  test('renders Amplify Auth', () => {
    render(<AppWithAuth />);
    
    // screen.debug()
    expect(screen.getByTestId('amplify-auth')).toBeInTheDocument();
    expect(screen.queryByTestId('sign-up')).toBeNull()
    expect(screen.getByTestId('sign-in')).toBeInTheDocument();
  });

});