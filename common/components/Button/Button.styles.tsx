import styled from 'styled-components'

interface IStyledButtonProps {
	secondary?: boolean
	big?: boolean
}

export const StyledButton = styled.button<IStyledButtonProps>`
	font-weight: 400;
	font-size: var(--fz-base);
	line-height: var(--lh-base);
	color: var(--c-white);
	background: var(--c-gray-55);
	backdrop-filter: var(--bf-blur-50);
	padding: var(--f11) var(--f20);
	border: none;
	border-radius: var(--br-20);
	cursor: pointer;
	letter-spacing: 0.05rem;
	transition: transform 0.2s;

	${({ secondary }) =>
		secondary
			? `
		background-image: var(--gr-orange-40);
	`
			: ''}

	${({ big }) =>
		big
			? `
		padding: var(--f29) var(--f24);
	`
			: ''}

	&:active {
		transform: translateY(var(--f2));
	}
`
