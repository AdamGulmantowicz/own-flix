import { render } from '@testing-library/react'
import InfoCard from '.'

it('InfoCard: renders', () => {
  const { container } = render(<InfoCard />)
  expect(container).toBeInTheDocument()
})