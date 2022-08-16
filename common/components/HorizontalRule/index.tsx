import React, { FC } from 'react'
import { StyledHorizontalRule } from './HorizontalRule.styles'
import { PropsWithChildren } from 'react'

interface IHorizontalRuleProps {}

const HorizontalRule: FC<IHorizontalRuleProps> = () => {
	return <StyledHorizontalRule />
}

export default HorizontalRule
