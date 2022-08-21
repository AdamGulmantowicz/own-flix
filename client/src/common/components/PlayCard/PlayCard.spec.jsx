import { render } from '@testing-library/react'
import PlayCard from '.'

it('PlayCard: renders', () => {
	const { container } = render(
		<PlayCard
			title="test"
			image="'https://www.themoviedb.org/t/p/w220_and_h330_face/dOCbVJPSTt3XUbr3oRLrHZYJeJN.jpg'"
		/>,
	)
	expect(container).toBeInTheDocument()
})
