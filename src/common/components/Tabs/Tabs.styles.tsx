import styled from 'styled-components'
import Text from '../Text'

export const StyledTabs = styled.nav``

export const StyledTabsTitleWrap = styled.div`
	display: flex;
	overflow-y: scroll;
`

interface IStyledTabTitleProps {
	active: boolean
}

export const StyledTabTitle = styled(Text)<IStyledTabTitleProps>`
	cursor: pointer;
	padding-bottom: var(--f8);
	position: relative;
	overflow-x: hidden;
	font-weight: 500;

	&::after {
		content: '';
		display: block;
		width: var(--f19);
		height: var(--f3);
		border-radius: var(--f3);
		background: var(--gr-orange-60);
		position: absolute;
		bottom: 0;
		left: 0;
		transform: translateX(calc(var(--f19) * -1));
		z-index: 2;
		transition: transform 0.2s;

		${({ active }) =>
			active
				? `
      transform: translateX(0);
    `
				: ''}
	}

	&:not(:last-child) {
		margin-right: var(--f24);
	}
`
