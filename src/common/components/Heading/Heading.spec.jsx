import { render } from '@testing-library/react'
import Heading from '.'

it('Heading: renders', () => {
  const { container } = render(<Heading />)
  expect(container).toBeInTheDocument()
})