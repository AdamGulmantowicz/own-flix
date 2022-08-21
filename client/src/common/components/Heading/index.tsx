import React, { FC } from 'react'
import type { IHeadingProps } from './types'
import { StyledHeading } from './Heading.styles'

const Heading: FC<IHeadingProps> = ({ secondary, children }) => {
	return <StyledHeading secondary={secondary}>{children}</StyledHeading>
}

export default Heading
