import { ComponentStory, ComponentMeta } from '@storybook/react'
import Template from '@stories/helpers/Template'
import PlayImage from '.'

export default {
	title: 'PlayImage',
	component: PlayImage,
	decorators: [
		Story => (
			<Template>
				<Story />
			</Template>
		),
	],
} as ComponentMeta<typeof PlayImage>

const Component: ComponentStory<typeof PlayImage> = args => (
	<PlayImage {...args} />
)

export const Default = Component.bind({})

Default.args = {
	height: 300,
	image:
		'https://www.themoviedb.org/t/p/w220_and_h330_face/dOCbVJPSTt3XUbr3oRLrHZYJeJN.jpg',
}
