import { render } from '@testing-library/react'
import React from 'react'

import ImagesSlider from './ImagesSlider'

describe('ImagesSlider', () => {
  it('should render the component', () => {
    const component = render(<ImagesSlider />)

    expect(component.asFragment).toMatchSnapshot()
  })
})
