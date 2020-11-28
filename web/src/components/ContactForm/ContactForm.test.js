import { render } from '@redwoodjs/testing'

import ContactForm from './ContactForm'

describe('ContactForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContactForm />)
    }).not.toThrow()
  })
})
