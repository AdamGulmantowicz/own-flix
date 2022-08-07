import React, { FC } from 'react'
import type { IInputProps } from './types'
import { StyledInput, StyledInputWrapper } from './Input.styles'
import { SearchIcon } from '../Icons'

const Input: FC<IInputProps> = ({ type, ...props }) => {
	if (type === 'search')
		return (
			<StyledInputWrapper>
				<StyledInput type={type} {...props} />
				<SearchIcon width={24} height={24} />
			</StyledInputWrapper>
		)

	return <StyledInput type={type} {...props} />
}

export default Input
