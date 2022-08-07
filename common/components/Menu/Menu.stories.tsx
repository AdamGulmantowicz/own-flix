import React from 'react'
import Template from '../../../.storybook/Template'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Menu from '.'

export default {
	title: 'Menu',
	component: Menu,
} as ComponentMeta<typeof Menu>

const Component: ComponentStory<typeof Menu> = args => (
	<Template>
		<Menu {...args} />
	</Template>
)

export const Default = Component.bind({})

Default.args = {
	pathname: 'home',
}
