import { ComponentStory, ComponentMeta } from '@storybook/react'
import Template from '@stories/helpers/Template'

import ReadMore from '.'

export default {
	title: 'ReadMore',
	component: ReadMore,
	decorators: [
		Story => (
			<Template>
				<Story />
			</Template>
		),
	],
} as ComponentMeta<typeof ReadMore>

const Component: ComponentStory<typeof ReadMore> = args => (
	<ReadMore {...args}>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur.
	</ReadMore>
)

export const Default = Component.bind({})

Default.args = {
	limit: 50,
	initialShowMore: false,
}
