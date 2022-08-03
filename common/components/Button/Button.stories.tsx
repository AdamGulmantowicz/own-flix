import { ComponentStory, ComponentMeta } from '@storybook/react'
import Template from '../../../.storybook/Template'
import Button from '.'

export default {
	title: 'Button',
	component: Button,
} as ComponentMeta<typeof Button>

const Component: ComponentStory<typeof Button> = args => (
	<Template>
		<Button {...args}>Ready Player One</Button>
	</Template>
)

export const Default = Component.bind({})

Default.args = {
	secondary: false,
	big: false,
}
