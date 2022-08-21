import { ECardSizeType, ICardProps } from '../Card/types'

export interface IInfoCardProps extends ICardProps {
	type: ECardSizeType.BIG
	rating: number
}
