import { render } from '@testing-library/react'
import Tabs from '.'

it('Tabs: renders', () => {
  const { container } = render(<Tabs />)
  expect(container).toBeInTheDocument()
})