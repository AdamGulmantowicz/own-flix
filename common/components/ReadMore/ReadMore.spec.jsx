import { render, screen } from '@testing-library/react'
import ReadMore from '.'

const dummyText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`

describe('Read more', () => {
	it('renders', () => {
		const { container } = render(<ReadMore>{dummyText}</ReadMore>)
		expect(container).toBeInTheDocument()
	})

	it('renders more text with initial state', () => {
		render(<ReadMore initialShowMore>{dummyText}</ReadMore>)

		const elementWithFullText = screen.getByText(dummyText)

		expect(elementWithFullText).toBeInTheDocument()
	})

	it('limits text', () => {
		render(<ReadMore limit={10}>{dummyText}</ReadMore>)
		const elementWithFullText = screen.getByText(dummyText.slice(0, 10))

		expect(elementWithFullText).toBeInTheDocument()
	})
})
