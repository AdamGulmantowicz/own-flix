import { PropsWithChildren } from 'react'
import { EColors } from '../../styles/types'

export interface ITextProps extends PropsWithChildren {
	big?: boolean
	small?: boolean
	smallest?: boolean
	secondary?: boolean
	color?: EColors
	marginBottom?: number
}
