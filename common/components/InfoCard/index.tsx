import React, { FC } from 'react'
import type { IInfoCardProps } from './types'
import {
	StyledTitleButton,
	StyledReviewButton,
	StyledContentButton,
} from './InfoCard.styles'
import Card from '../Card'
import Text from '../Text'
import { StarIcon } from '../Icons'

const InfoCard: FC<IInfoCardProps> = ({ title, rating, ...rest }) => {
	console.log(rating)
	return (
		<Card {...rest}>
			<StyledReviewButton>
				<Text smallest>IMDB</Text>
				<StyledContentButton>
					<StarIcon width={16} height={16} />
					<Text small>{rating}</Text>
				</StyledContentButton>
			</StyledReviewButton>
			<StyledTitleButton big>{title}</StyledTitleButton>
		</Card>
	)
}

export default InfoCard
