import { render } from '@redwoodjs/testing'

import NotFound from './NotFound'

describe('NotFound', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotFound />)
    }).not.toThrow()
  })
})
