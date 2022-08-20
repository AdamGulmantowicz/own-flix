import Template from '@stories/helpers/Template'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Page } from './Page'
export default {
	title: 'PlayCard',
	component: Page,
	decorators: [
		Story => (
			<Template>
				<Story />
			</Template>
		),
	],
} as ComponentMeta<typeof Page>

const Component: ComponentStory<typeof Page> = args => (
	<Page {...args}>This is example page content</Page>
)

export const Default = Component.bind({})

Default.args = {
	paddingTop: false,
}
