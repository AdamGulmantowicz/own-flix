import { ComponentStory, ComponentMeta } from '@storybook/react'
import Template from '../../../.storybook/Template'
import Button from '.'

export default {
	title: 'Button',
	component: Button,
} as ComponentMeta<typeof Button>

const Component: ComponentStory<typeof Button> = args => (
	<Template>
		<Button {...args} />
	</Template>
)

export const Default = Component.bind({})

Default.args = {}
