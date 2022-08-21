import { render } from '@testing-library/react'
import HorizontalRule from '.'

it('HorizontalRule: renders', () => {
  const { container } = render(<HorizontalRule />)
  expect(container).toBeInTheDocument()
})