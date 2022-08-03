import React from 'react'
import Template from '../../../.storybook/Template'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Heading from '.'

export default {
	title: 'Heading',
	component: Heading,
} as ComponentMeta<typeof Heading>

const Component: ComponentStory<typeof Heading> = args => (
	<Template>
		<Heading {...args}>Heading</Heading>
	</Template>
)

export const Default = Component.bind({})

Default.args = {
	secondary: false,
}
