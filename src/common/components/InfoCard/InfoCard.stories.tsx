import { ComponentStory, ComponentMeta } from '@storybook/react'
import Template from '@stories/helpers/Template'

import InfoCard from '.'
import { ECardSizeType } from '../Card/types'

export default {
	title: 'InfoCard',
	component: InfoCard,
	decorators: [
		Story => (
			<Template>
				<Story />
			</Template>
		),
	],
} as ComponentMeta<typeof InfoCard>

const Component: ComponentStory<typeof InfoCard> = args => (
	<InfoCard {...args} />
)

export const Default = Component.bind({})

Default.args = {
	image:
		'https://www.themoviedb.org/t/p/w220_and_h330_face/dOCbVJPSTt3XUbr3oRLrHZYJeJN.jpg',
	title: 'Doctor Strange in Multiverse of Maddness',
	year: 2022,
	type: ECardSizeType.BIG,
	rating: 7.0,
}
