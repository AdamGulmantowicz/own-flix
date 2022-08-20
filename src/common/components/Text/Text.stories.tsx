import { ComponentStory, ComponentMeta } from '@storybook/react'
import Template from '@stories/helpers/Template'

import Text from '.'

export default {
	title: 'Text',
	component: Text,
	decorators: [
		Story => (
			<Template>
				<Story />
			</Template>
		),
	],
} as ComponentMeta<typeof Text>

const Component: ComponentStory<typeof Text> = args => (
	<Text {...args}>Star Wars: The Last Jedi</Text>
)

export const Default = Component.bind({})

Default.args = {
	small: false,
	big: false,
	smallest: false,
	secondary: false,
}
