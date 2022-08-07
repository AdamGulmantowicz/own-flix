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
import { PlayIconFill } from '../Icons'

const PlayCard: FC<IPlayCardProps> = ({ title, ...rest }) => {
	return (
		<Card {...rest}>
			<StyledPlayCard>
				<StyledButton>
					<PlayIconFill width={28} height={28} />
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
