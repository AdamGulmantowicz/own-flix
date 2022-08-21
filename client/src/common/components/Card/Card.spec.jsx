import { render } from '@testing-library/react'
import Card from '.'

it('Card: renders', () => {
  const { container } = render(<Card />)
  expect(container).toBeInTheDocument()
})