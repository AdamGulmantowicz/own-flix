import { PropsWithChildren } from 'react'
import { ECardSizeType, ICardProps } from '../Card/types'

export interface IPlayCardProps extends ICardProps {
	type: ECardSizeType.HORIZONTAL
}
