import { ComponentStory, ComponentMeta } from '@storybook/react'
import Template from '@stories/helpers/Template'
import Card from '.'
import { ECardSizeType } from './types'

export default {
	title: 'Card',
	component: Card,
	argTypes: {
		type: {
			options: Object.values(ECardSizeType),
			control: { type: 'select' },
		},
	},
	decorators: [
		Story => (
			<Template>
				<Story />
			</Template>
		),
	],
} as ComponentMeta<typeof Card>

const Component: ComponentStory<typeof Card> = args => <Card {...args} />

export const Default = Component.bind({})

Default.args = {
	image:
		'https://www.themoviedb.org/t/p/w220_and_h330_face/dOCbVJPSTt3XUbr3oRLrHZYJeJN.jpg',
	title: 'Doctor Strange in Multiverse of Maddness',
	year: 2022,
	type: ECardSizeType.DEFAULT,
}
