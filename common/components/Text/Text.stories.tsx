import React from 'react'
import Template from '../../../.storybook/Template'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Text from '.'

export default {
	title: 'Text',
	component: Text,
} as ComponentMeta<typeof Text>

const Component: ComponentStory<typeof Text> = args => (
	<Template>
		<Text {...args}>Star Wars: The Last Jedi</Text>
	</Template>
)

export const Default = Component.bind({})

Default.args = {}
