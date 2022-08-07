import React from 'react';
import Template from '../../../.storybook/Template'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tabs from '.';

export default {
  title: 'Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Component: ComponentStory<typeof Tabs> = args => (
	<Template>
		<Tabs {...args}/>
	</Template>
)

export const Default = Component.bind({});

Default.args = {};