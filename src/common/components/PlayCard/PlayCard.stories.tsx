import { ComponentStory, ComponentMeta } from '@storybook/react'
import Template from '@stories/helpers/Template'

import PlayCard from '.'
import { ECardSizeType } from '../Card/types'

export default {
	title: 'PlayCard',
	component: PlayCard,
	decorators: [
		Story => (
			<Template>
				<Story />
			</Template>
		),
	],
} as ComponentMeta<typeof PlayCard>

const Component: ComponentStory<typeof PlayCard> = args => (
	<PlayCard {...args} />
)

export const Default = Component.bind({})

Default.args = {
	image:
		'https://www.themoviedb.org/t/p/w220_and_h330_face/dOCbVJPSTt3XUbr3oRLrHZYJeJN.jpg',
	title: 'Doctor Strange in Multiverse of Maddness',
	year: 2022,
	type: ECardSizeType.HORIZONTAL,
}
