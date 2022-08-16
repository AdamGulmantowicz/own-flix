import React from 'react';
import Template from '../../../.storybook/Template'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HorizontalRule from '.';

export default {
  title: 'HorizontalRule',
  component: HorizontalRule,
} as ComponentMeta<typeof HorizontalRule>;

const Component: ComponentStory<typeof HorizontalRule> = args => (
	<Template>
		<HorizontalRule {...args}/>
	</Template>
)

export const Default = Component.bind({});

Default.args = {};