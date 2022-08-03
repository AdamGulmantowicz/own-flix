import React, { FC } from 'react'
import type { ITextProps } from './types'
import { StyledText } from './Text.styles'

const Text: FC<ITextProps> = ({ children, big, small, smallest }) => {
	return (
		<StyledText big={big} small={small} smallest={smallest}>
			{children}
		</StyledText>
	)
}

export default Text
