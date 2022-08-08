import React from 'react'
import Template from '../../../.storybook/Template'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Tabs from '.'
import Tab from './components/Tab'
export default {
	title: 'Tabs',
	component: Tabs,
} as ComponentMeta<typeof Tabs>

const Component: ComponentStory<typeof Tabs> = args => (
	<Template>
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
	</Template>
)

export const Default = Component.bind({})

Default.args = {
	initialActive: 'movies',
}
