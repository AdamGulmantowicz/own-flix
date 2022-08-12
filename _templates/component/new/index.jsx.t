---
to: common/components/<%= name %>/index.tsx
---

import React, { FC } from 'react'
<% if (locals.separateTypes){ -%>
import type { I<%= name %>Props } from './types'
<% } -%>
import { Styled<%= name %> } from './<%= name %>.styles'
<% if (!locals.separateTypes){ -%>
import { PropsWithChildren } from 'react'

interface I<%= name %>Props extends PropsWithChildren {}
<% } -%>

const <%= name %>: FC<I<%= name %>Props> = () => {
  return <Styled<%= name %>><%= name %></Styled<%= name %>>
}

export default <%= name %>