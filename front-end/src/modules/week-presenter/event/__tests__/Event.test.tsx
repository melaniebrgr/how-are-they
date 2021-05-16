/* Example component unit test:

import * as React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Event from '@App/modules/week-presenter/event/Event';

describe('Event', () => {
  test('renders an event', () => {
    render(<Event text={'description of event'} timestamp={'2019-05-12T18:53:15.222Z'} />);
    const result = screen.getByText(/description of event/i)
    expect(result).toBeInTheDocument();
  });
})
*/