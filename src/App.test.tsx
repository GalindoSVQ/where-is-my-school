import {  render, screen } from '@testing-library/react';
import App from 'App';

describe('<App />', () => {
  test('should render Hello World', () => {

    render(<App />);

    const title = screen.getByText('Hello World!');
    expect(title).toBeDefined();

  });
});
