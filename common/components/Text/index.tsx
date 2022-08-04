import React, { FC } from 'react'
import type { ITextProps } from './types'
import { StyledText } from './Text.styles'

const Text: FC<ITextProps> = ({
	children,
	big,
	small,
	smallest,
	secondary,
}) => {
	return (
		<StyledText
			big={big}
			small={small}
			smallest={smallest}
			secondary={secondary}
		>
			{children}
		</StyledText>
	)
}

export default Text
