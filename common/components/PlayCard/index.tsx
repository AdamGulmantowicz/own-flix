import { FC } from 'react'
import type { IPlayCardProps } from './types'
import {
	MainText,
	StyledButton,
	StyledPlayCard,
	StyledTextWrapper,
} from './PlayCard.styles'
import Card from '../Card'
import Text from '../Text'
import { EColors } from '../../styles/types'
import { PlayIcon } from '../Icons'

const PlayCard: FC<IPlayCardProps> = ({ title, ...rest }) => {
	return (
		<Card {...rest}>
			<StyledPlayCard>
				<StyledButton>
					<PlayIcon />
					<StyledTextWrapper>
						<Text color={EColors.GRAY_45} small>
							Continue Watching
						</Text>
						<MainText>{title}</MainText>
					</StyledTextWrapper>
				</StyledButton>
			</StyledPlayCard>
		</Card>
	)
}

export default PlayCard
