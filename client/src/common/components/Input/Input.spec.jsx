import { render } from '@testing-library/react'
import Input from '.'

it('Input: renders', () => {
  const { container } = render(<Input />)
  expect(container).toBeInTheDocument()
})