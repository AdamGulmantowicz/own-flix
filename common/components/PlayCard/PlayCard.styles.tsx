import styled from 'styled-components'
import Button from '../Button'
import Text from '../Text'

export const StyledButton = styled(Button)`
	display: flex;
	align-items: center;
	max-width: 100%;

	svg {
		flex-shrink: 0;
		margin-right: var(--f20);
	}
`

export const StyledTextWrapper = styled.div``

export const MainText = styled(Text)`
	margin-top: var(--f2);
	height: var(--lh-sm);
	width: var(--f125);
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`

export const StyledPlayCard = styled.div`
	position: absolute;
	bottom: var(--f8);
	left: var(--f12);
	max-width: var(--f215);
	text-align: left;
`
