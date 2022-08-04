import styled from 'styled-components'
import { ECardSizeType } from './types'

interface IStyledCardProps {
	image: string
	size: number[]
	type: ECardSizeType
}

interface IStyledCardWrapperProps {
	size: number[]
}

export const StyledCardWrapper = styled.div<IStyledCardWrapperProps>`
	${({ size }) => `
    max-width: ${size[0]}px;
  `}

	span {
		margin-left: var(--f4);
		color: var(--c-gray-45);
	}
`

export const StyledCard = styled.div<IStyledCardProps>`
	padding: var(--f8) var(--f12);
	${({ type }) =>
		type === ECardSizeType.BIG
			? `
    border-radius: var(--br-30);
    padding: var(--f20) var(--f16);
  `
			: `
    border-radius: var(--br-20);
  `}
	${({ image, size }) => `
    width: ${size[0]}px;
    height: ${size[1]}px;
    background-image: url(${image});
    background-size: cover;
    background-position: center;
  `}

	&:not(:last-child) {
		margin-bottom: var(--f12);
	}
`
