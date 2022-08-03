---
to: common/components/<%= name %>/<%= name %>.stories.tsx
---
import React from 'react';
import Template from '../../../.storybook/Template'
import { ComponentStory, ComponentMeta } from '@storybook/react';

import <%= name %> from '.';

export default {
  title: '<%= name %>',
  component: <%= name %>,
} as ComponentMeta<typeof <%= name %>>;

const Component: ComponentStory<typeof Button> = args => (
	<Template>
		<<%= name %> {...args} />
	</Template>
)

export const Default = Component.bind({});

Default.args = {};