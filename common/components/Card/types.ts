import { PropsWithChildren } from 'react'

export enum ECardSizeType {
	BIG = 'big',
	SMALL = 'small',
	DEFAULT = 'default',
	HORIZONTAL = 'horizontal',
}

export interface ICardProps extends PropsWithChildren {
	title: string
	image: string
	year?: number | string
	type?: ECardSizeType
}
