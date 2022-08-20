import { ComponentStory, ComponentMeta } from '@storybook/react'
import Template from '@stories/helpers/Template'
import Heading from '.'

export default {
	title: 'Heading',
	component: Heading,
	decorators: [
		Story => (
			<Template>
				<Story />
			</Template>
		),
	],
} as ComponentMeta<typeof Heading>

const Component: ComponentStory<typeof Heading> = args => (
	<Heading {...args}>Heading</Heading>
)

export const Default = Component.bind({})

Default.args = {
	secondary: false,
}
