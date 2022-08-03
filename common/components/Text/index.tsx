import React, { FC } from 'react'
import type { ITextProps } from './types'
import { StyledText } from './Text.styles'

const Text: FC<ITextProps> = ({ children }) => {
	return <StyledText>{children}</StyledText>
}

export default Text
