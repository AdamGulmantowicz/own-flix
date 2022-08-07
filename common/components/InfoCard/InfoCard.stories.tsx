import React from 'react'
import Template from '../../../.storybook/Template'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import InfoCard from '.'
import { ECardSizeType } from '../Card/types'

export default {
	title: 'InfoCard',
	component: InfoCard,
} as ComponentMeta<typeof InfoCard>

const Component: ComponentStory<typeof InfoCard> = args => (
	<Template>
		<InfoCard {...args} />
	</Template>
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
