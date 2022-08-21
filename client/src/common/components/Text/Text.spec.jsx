import { render } from '@testing-library/react'
import Text from '.'

it('Text: renders', () => {
  const { container } = render(<Text />)
  expect(container).toBeInTheDocument()
})