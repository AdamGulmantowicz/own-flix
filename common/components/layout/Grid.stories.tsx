import React from 'react'
import Template from '../../../.storybook/Template'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Cell, Grid } from './Grid'

export default {
	title: 'Grid',
	component: Grid,
} as ComponentMeta<typeof Grid>

const Component: ComponentStory<typeof Grid> = args => (
	<Template>
		<Grid {...args}>
			<Cell size={2}>This is 1/6</Cell>
			<Cell size={4}>This is 1/4</Cell>
			<Cell size={6}>This is 1/2</Cell>
		</Grid>
	</Template>
)

export const Default = Component.bind({})

Default.args = {}
