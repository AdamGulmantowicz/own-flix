import { ComponentStory, ComponentMeta } from '@storybook/react'
import Template from '@stories/helpers/Template'
import Menu from '.'

export default {
	title: 'Menu',
	component: Menu,
	decorators: [
		Story => (
			<Template>
				<Story />
			</Template>
		),
	],
} as ComponentMeta<typeof Menu>

const Component: ComponentStory<typeof Menu> = args => <Menu {...args} />

export const Default = Component.bind({})

Default.args = {
	pathname: 'home',
}
