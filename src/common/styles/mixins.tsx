import { EColors } from './types'

export const MixinMarginBottom = (size: number) =>
	`margin-bottom: var(--f${size});`

export const MixinColor = (color: EColors) => `color: var(--c-${color});`
