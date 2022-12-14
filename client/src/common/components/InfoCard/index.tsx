import React, { FC } from 'react'
import type { IInfoCardProps } from './types'
import {
	StyledTitleButton,
	StyledReviewButton,
	StyledContentButton,
} from './InfoCard.styles'
import Card from '@components/Card'
import Text from '@components/Text'
import { StarIconFill } from '@components/Icons'

const InfoCard: FC<IInfoCardProps> = ({ title, rating, ...rest }) => {
	return (
		<Card {...rest}>
			<StyledReviewButton>
				<Text smallest>IMDB</Text>
				<StyledContentButton>
					<StarIconFill width={16} height={16} />
					<Text small>{rating}</Text>
				</StyledContentButton>
			</StyledReviewButton>
			<StyledTitleButton big>{title}</StyledTitleButton>
		</Card>
	)
}

export default InfoCard
