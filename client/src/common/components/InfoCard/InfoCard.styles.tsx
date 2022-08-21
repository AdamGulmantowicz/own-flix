import Button from '../Button'
import styled from 'styled-components'

export const StyledReviewButton = styled(Button)`
	position: absolute;
	right: var(--f16);
	top: var(--f16);
	padding: var(--f6) var(--f12);
	border-radius: var(--br-15);
`

export const StyledContentButton = styled.div`
	display: flex;
	align-items: center;

	svg {
		margin-right: var(--f9);
	}
`

export const StyledTitleButton = styled(Button)`
	position: absolute;
	right: var(--f16);
	bottom: var(--f16);
	max-width: calc(100% - (var(--f16) * 2));
	text-align: center;
`
