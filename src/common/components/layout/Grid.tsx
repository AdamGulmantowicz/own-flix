import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'

interface IGridProps {
	gap?: number
}

interface ICellProps {
	size?: number
}

const StyledGrid = styled.div<IGridProps>`
	display: flex;

	> &:not(:last-child) {
		margin-left: var(--f ${props => props.gap});
	}
`

const StyledCell = styled.div<Required<ICellProps>>`
	width: ${props => (100 / 12) * props.size}%;
`

export const Cell: FC<PropsWithChildren<ICellProps>> = ({
	size = 12,
	children,
}) => {
	return <StyledCell size={size}>{children}</StyledCell>
}

export const Grid: FC<PropsWithChildren<IGridProps>> = ({
	children,
	gap = 0,
}) => {
	return <StyledGrid gap={gap}>{children}</StyledGrid>
}
