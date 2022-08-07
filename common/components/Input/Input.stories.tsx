import React from 'react'
import Template from '../../../.storybook/Template'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Input from '.'

export default {
	title: 'Input',
	component: Input,
} as ComponentMeta<typeof Input>

const Component: ComponentStory<typeof Input> = args => (
	<Template>
		<Input {...args} />
	</Template>
)

export const Default = Component.bind({})

Default.args = {
	placeholder: 'Sherlock Holmes',
	type: 'email',
	required: true,
}
