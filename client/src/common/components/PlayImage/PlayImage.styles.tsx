import styled from 'styled-components'

export interface IStyledPlayImageProps {
	image: string
	height: number
}

export const StyledPlayImage = styled.div<IStyledPlayImageProps>`
	position: relative;
	background-image: url(${props => props.image});
	background-size: cover;
	background-position: center;
	height: ${props => props.height}px;
`
export const StyledPlayButton = styled.button`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: transparent;
	transition: transform 0.2s;

	&:active {
		transform: translate(-50%, calc(-50% + var(--f10)));
	}

	svg {
		width: var(--f65);
		height: var(--f65);
	}
`
