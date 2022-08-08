import { PropsWithChildren } from 'react'
import { EColors } from '../../styles/types'

export interface IStyledTextProps {
	big?: boolean
	small?: boolean
	smallest?: boolean
	secondary?: boolean
	color?: EColors
	marginBottom?: number
}

export interface ITextProps extends PropsWithChildren<IStyledTextProps> {
	onClick?: () => void
}
