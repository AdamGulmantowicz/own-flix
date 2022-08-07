import React, { FC } from 'react'
import type { IButtonProps } from './types'
import { StyledButton } from './Button.styles'

const Button: FC<IButtonProps> = ({ children, secondary, big, ...rest }) => {
	return (
		<StyledButton secondary={secondary} big={big} {...rest}>
			{children}
		</StyledButton>
	)
}

export default Button
