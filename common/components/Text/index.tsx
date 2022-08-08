import React, { FC, PropsWithChildren } from 'react'
import type { ITextProps } from './types'
import { StyledText } from './Text.styles'

const Text: FC<ITextProps> = ({ children, ...rest }) => {
	return <StyledText {...rest}>{children}</StyledText>
}

export default Text
