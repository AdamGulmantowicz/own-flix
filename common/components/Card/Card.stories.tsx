import React from 'react'
import Template from '../../../.storybook/Template'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Card from '.'
import { ECardSizeType } from './types'

export default {
	title: 'Card',
	component: Card,
} as ComponentMeta<typeof Card>

const Component: ComponentStory<typeof Card> = args => (
	<Template>
		<Card {...args} />
	</Template>
)

export const Default = Component.bind({})

Default.args = {
	image:
		'https://www.themoviedb.org/t/p/w220_and_h330_face/dOCbVJPSTt3XUbr3oRLrHZYJeJN.jpg',
	title: 'Doctor Strange in Multiverse of Maddness',
	year: 2022,
	type: ECardSizeType.DEFAULT,
}
