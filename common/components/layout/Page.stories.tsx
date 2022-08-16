import React from 'react'
import Template from '../../../.storybook/Template'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Page } from './Page'

export default {
	title: 'Page',
	component: Page,
} as ComponentMeta<typeof Page>

const Component: ComponentStory<typeof Page> = args => (
	<Template>
		<Page {...args}>This is example page content</Page>
	</Template>
)

export const Default = Component.bind({})

Default.args = {
	paddingTop: false,
}
