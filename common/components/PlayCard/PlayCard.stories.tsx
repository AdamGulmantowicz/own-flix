import React from 'react'
import Template from '../../../.storybook/Template'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PlayCard from '.'
import { ECardSizeType } from '../Card/types'

export default {
	title: 'PlayCard',
	component: PlayCard,
} as ComponentMeta<typeof PlayCard>

const Component: ComponentStory<typeof PlayCard> = args => (
	<Template>
		<PlayCard {...args} />
	</Template>
)

export const Default = Component.bind({})

Default.args = {
	image:
		'https://www.themoviedb.org/t/p/w220_and_h330_face/dOCbVJPSTt3XUbr3oRLrHZYJeJN.jpg',
	title: 'Doctor Strange in Multiverse of Maddness',
	year: 2022,
	type: ECardSizeType.HORIZONTAL,
}
