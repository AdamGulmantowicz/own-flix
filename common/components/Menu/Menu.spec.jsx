import { render } from '@testing-library/react'
import Menu from '.'

it('Menu: renders', () => {
  const { container } = render(<Menu />)
  expect(container).toBeInTheDocument()
})