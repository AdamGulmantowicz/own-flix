import { ComponentStory, ComponentMeta } from '@storybook/react'
import Template from '@stories/helpers/Template'
import HorizontalRule from '.'

export default {
	title: 'HorizontalRule',
	component: HorizontalRule,
	decorators: [
		Story => (
			<Template>
				<Story />
			</Template>
		),
	],
} as ComponentMeta<typeof HorizontalRule>

const Component: ComponentStory<typeof HorizontalRule> = args => (
	<HorizontalRule {...args} />
)

export const Default = Component.bind({})

Default.args = {}
