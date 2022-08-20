import { ComponentStory, ComponentMeta } from '@storybook/react'
import Template from '@stories/helpers/Template'

import { Cell, Grid } from './Grid'

export default {
	title: 'Grid',
	component: Grid,
	decorators: [
		Story => (
			<Template>
				<Story />
			</Template>
		),
	],
} as ComponentMeta<typeof Grid>

const Component: ComponentStory<typeof Grid> = args => (
	<Grid {...args}>
		<Cell size={2}>This is 1/6</Cell>
		<Cell size={4}>This is 1/4</Cell>
		<Cell size={6}>This is 1/2</Cell>
	</Grid>
)

export const Default = Component.bind({})

Default.args = {}
