import { ComponentStory, ComponentMeta } from '@storybook/react'
import Template from '@stories/helpers/Template'

import Tag from '.'

export default {
	title: 'Tag',
	component: Tag,
	decorators: [
		Story => (
			<Template>
				<Story />
			</Template>
		),
	],
} as ComponentMeta<typeof Tag>

const Component: ComponentStory<typeof Tag> = args => (
	<Tag {...args}>Action</Tag>
)

export const Default = Component.bind({})

Default.args = {
	wide: true,
}
