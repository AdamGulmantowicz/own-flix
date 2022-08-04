import { PropsWithChildren } from 'react'

export interface ITextProps extends PropsWithChildren {
	big?: boolean
	small?: boolean
	smallest?: boolean
	secondary?: boolean
}
