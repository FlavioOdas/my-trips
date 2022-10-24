import { render } from '@testing-library/react'
import React from 'react'

import Footer from './Footer'

describe('Footer', () => {
  it('should render correclty', () => {
    const component = render(<Footer />)

    expect(component.asFragment).toMatchSnapshot()
  })
})
