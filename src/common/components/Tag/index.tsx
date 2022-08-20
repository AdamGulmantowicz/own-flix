import React, { FC } from 'react'
import { StyledTag } from './Tag.styles'
import { PropsWithChildren } from 'react'

export interface ITagProps extends PropsWithChildren {
	wide?: boolean
}

const Tag: FC<ITagProps> = ({ children, wide }) => {
	return (
		<StyledTag small wide={wide}>
			{children}
		</StyledTag>
	)
}

export default Tag
