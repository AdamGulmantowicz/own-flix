import { render } from '@testing-library/react'
import Tag from '.'

it('Tag: renders', () => {
  const { container } = render(<Tag />)
  expect(container).toBeInTheDocument()
})