import styled from 'styled-components'
import { orangeGradient } from '../../styles/effects'

interface IStyledTextProps {
	big?: boolean
	small?: boolean
	smallest?: boolean
	secondary?: boolean
}

export const StyledText = styled.p<IStyledTextProps>`
	font-size: var(--fz-sm);
	line-height: var(--lh-sm);
	letter-spacing: var(--ls-40);

	${({ secondary }) => (secondary ? orangeGradient : '')}

	${({ big }) =>
		big
			? `
  	font-size: var(--fz-base);
    line-height: var(--lh-base);
  `
			: ''}

	${({ small }) =>
		small
			? `
    font-size: var(--fz-xsm);
    line-height: var(--lh-xsm);
  `
			: ''}

  ${({ smallest }) =>
		smallest
			? `
    font-size: var(--fz-2xsm);
    line-height: var(--lh-2xsm);
  `
			: ''}
`
