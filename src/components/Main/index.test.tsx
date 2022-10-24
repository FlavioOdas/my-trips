import { render, screen } from '@testing-library/react'
import React from 'react'

import Main from '.'

describe('Main', () => {
  it('should render the logo', () => {
    render(<Main />)

    expect(
      screen.getByAltText(
        'Imagem de um átomo e React Avançado escrito ao lado.'
      )
    ).toBeInTheDocument()
  })

  it('should render the title', () => {
    render(<Main />)

    expect(screen.getByText('React Avançado')).toBeInTheDocument()
  })

  it('should render the description', () => {
    render(<Main />)

    expect(
      screen.getByText('TypeScript, ReactJs, NextJS e Styled Components')
    ).toBeInTheDocument()
  })
})
