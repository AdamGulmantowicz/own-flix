import { render } from '@testing-library/react'
import PlayImage from '.'

it('PlayImage: renders', () => {
  const { container } = render(<PlayImage />)
  expect(container).toBeInTheDocument()
})