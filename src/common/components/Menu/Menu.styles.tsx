import styled from 'styled-components'

export const StyledMenu = styled.nav`
	padding: var(--f20) var(--f65);
`

export const StyledMenuList = styled.ul`
	display: flex;
	justify-content: space-around;
	align-items: center;
`

export const StyledMenuListItem = styled.li`
	cursor: pointer;
	svg {
		width: var(--f30);
		height: var(--f30);
	}
`
