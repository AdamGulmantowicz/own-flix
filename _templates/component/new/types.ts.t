---
to: "<%= locals.separateTypes ? `common/components/${name}/types.ts` : null %>"
---
import { PropsWithChildren } from 'react'

export interface I<%= name %>Props extends PropsWithChildren {}