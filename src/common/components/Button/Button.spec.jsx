import { render } from '@testing-library/react'
import Button from '.'

it('Button: renders', () => {
  const { container } = render(<Button />)
  expect(container).toBeInTheDocument()
})