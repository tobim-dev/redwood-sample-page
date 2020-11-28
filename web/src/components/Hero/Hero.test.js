import { render } from '@redwoodjs/testing'

import Hero from './Hero'

describe('Hero', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Hero />)
    }).not.toThrow()
  })
})
