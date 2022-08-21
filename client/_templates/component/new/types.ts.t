---
to: "<%= locals.separateTypes ? `src/src/common/components/${name}/types.ts` : null %>"
---
import { PropsWithChildren } from 'react'

export interface I<%= name %>Props extends PropsWithChildren {}