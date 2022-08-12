import React from 'react'
import Template from '../../../.storybook/Template'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Tag from '.'

export default {
	title: 'Tag',
	component: Tag,
} as ComponentMeta<typeof Tag>

const Component: ComponentStory<typeof Tag> = args => (
	<Template>
		<Tag {...args}>Action</Tag>
	</Template>
)

export const Default = Component.bind({})

Default.args = {
	wide: true,
}
