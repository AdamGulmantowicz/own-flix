import { ComponentStory, ComponentMeta } from '@storybook/react'
import Template from '@stories/helpers/Template'

import Tabs from '.'
import Tab from './components/Tab'
export default {
	title: 'Tabs',
	component: Tabs,
	decorators: [
		Story => (
			<Template>
				<Story />
			</Template>
		),
	],
} as ComponentMeta<typeof Tabs>

const Component: ComponentStory<typeof Tabs> = args => (
	<Tabs {...args}>
		<Tab title="Movies" id="movies">
			Some movies
		</Tab>
		<Tab title={'TV series'} id="series">
			Some series
		</Tab>
		<Tab title="Documentary" id="documentary">
			Some documentaries
		</Tab>
		<Tab title="Sports" id="sports">
			Some sports
		</Tab>
	</Tabs>
)

export const Default = Component.bind({})

Default.args = {
	initialActive: 'movies',
}
