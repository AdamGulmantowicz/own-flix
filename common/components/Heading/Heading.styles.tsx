import styled from 'styled-components'
import { orangeGradient } from '../../styles/effects'

interface IStyledHeadingProps {
	secondary?: boolean
}

export const StyledHeading = styled.h1<IStyledHeadingProps>`
	font-weight: 400;
	font-size: var(--fz-xl);
	letter-spacing: 0.02rem;

	${({ secondary }) => (secondary ? orangeGradient : '')}
`
