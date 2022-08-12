import React from 'react'
import Template from '../../../.storybook/Template'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ReadMore from '.'

export default {
	title: 'ReadMore',
	component: ReadMore,
} as ComponentMeta<typeof ReadMore>

const Component: ComponentStory<typeof ReadMore> = args => (
	<Template>
		<ReadMore {...args}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
			velit esse cillum dolore eu fugiat nulla pariatur.
		</ReadMore>
	</Template>
)

export const Default = Component.bind({})

Default.args = {
	limit: 50,
	initialShowMore: false,
}
