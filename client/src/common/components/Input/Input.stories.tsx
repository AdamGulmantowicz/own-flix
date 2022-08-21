import { ComponentStory, ComponentMeta } from '@storybook/react'
import Template from '@stories/helpers/Template'

import Input from '.'

export default {
	title: 'Input',
	component: Input,
	decorators: [
		Story => (
			<Template>
				<Story />
			</Template>
		),
	],
} as ComponentMeta<typeof Input>

const Component: ComponentStory<typeof Input> = args => <Input {...args} />

export const Default = Component.bind({})

Default.args = {
	placeholder: 'Sherlock Holmes',
	type: 'email',
	required: true,
}
