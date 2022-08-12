import React from 'react'
import Template from '../../../.storybook/Template'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PlayImage from '.'

export default {
	title: 'PlayImage',
	component: PlayImage,
} as ComponentMeta<typeof PlayImage>

const Component: ComponentStory<typeof PlayImage> = args => (
	<Template>
		<PlayImage {...args} />
	</Template>
)

export const Default = Component.bind({})

Default.args = {
	height: 300,
	image:
		'https://www.themoviedb.org/t/p/w220_and_h330_face/dOCbVJPSTt3XUbr3oRLrHZYJeJN.jpg',
}
