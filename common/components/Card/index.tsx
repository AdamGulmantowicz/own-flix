import React, { FC } from 'react'
import { ECardSizeType, ICardProps } from './types'
import { StyledCard, StyledCardWrapper } from './Card.styles'
import Image from 'next/image'
import Text from '../Text'

const sizes = {
	[ECardSizeType.BIG]: [258, 336],
	[ECardSizeType.SMALL]: [142, 106],
	[ECardSizeType.DEFAULT]: [154, 184],
	[ECardSizeType.HORIZONTAL]: [327, 191],
}

const Card: FC<ICardProps> = ({
	title,
	year,
	type = ECardSizeType.DEFAULT,
	image,
	children,
}) => {
	const size = sizes[type]

	return (
		<StyledCardWrapper size={size}>
			<StyledCard image={image} size={size} type={type}>
				{children}
			</StyledCard>
			{type !== ECardSizeType.HORIZONTAL && type !== ECardSizeType.BIG && (
				<Text small={type === 'small'}>
					{title}
					<span>({year})</span>
				</Text>
			)}
		</StyledCardWrapper>
	)
}

export default Card
