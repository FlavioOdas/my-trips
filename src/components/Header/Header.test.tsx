import { render } from '@testing-library/react';
import React from 'react';

import Header from './Header';

describe("Header", () => {
  it("should render correclty", () => {
    const component = render(<Header />);

    expect(component.asFragment).toMatchSnapshot();
  });
}); 