import { ComponentStory, ComponentMeta } from '@storybook/react'
import Template from '@stories/helpers/Template'
import Button from '.'

export default {
	title: 'Button',
	component: Button,
	decorators: [
		Story => (
			<Template>
				<Story />
			</Template>
		),
	],
} as ComponentMeta<typeof Button>

const Component: ComponentStory<typeof Button> = args => (
	<Button {...args}>Ready Player One</Button>
)

export const Default = Component.bind({})

Default.args = {
	secondary: false,
	big: false,
}
