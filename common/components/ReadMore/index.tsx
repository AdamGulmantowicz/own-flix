import React, { FC, useState } from 'react'
import { StyledReadMore } from './ReadMore.styles'
import { PropsWithChildren } from 'react'
import Text from '../Text'
import { EColors } from '../../styles/types'

interface IReadMoreProps extends PropsWithChildren {
	limit?: number
	initialShowMore?: boolean
	children: string
}

const ReadMore: FC<IReadMoreProps> = ({
	children,
	limit = 200,
	initialShowMore = false,
}) => {
	const [showMore, setShowMore] = useState(initialShowMore)
	return (
		<Text color={EColors.GRAY_45}>
			{children.length > limit ? (
				<>
					{showMore ? children : children.slice(0, limit)}
					<StyledReadMore
						color={EColors.WHITE}
						onClick={() => setShowMore(!showMore)}
						forwardedAs="strong"
					>
						{showMore ? 'Show less' : 'Read more'}
					</StyledReadMore>
				</>
			) : (
				children
			)}
		</Text>
	)
}

export default ReadMore
