import styled from 'styled-components'

export const StyledInputWrapper = styled.div`
	position: relative;

	svg {
		position: absolute;
		left: var(--f12);
		top: var(--f12);
	}
`

export const StyledInput = styled.input`
	padding: var(--f12) var(--f16);
	border-radius: var(--br-20);
	border: none;
	outline: none;
	background-color: var(--c-primary-light);
	color: var(--c-white);
	font-size: var(--fz-sm);
	line-height: var(--f16);
	transition: color 0.15s;

	&::placeholder {
		color: var(--c-gray-50);
	}

	&[type='search'] {
		padding: var(--f16) var(--f12) var(--f16) var(--f50);
	}

	:not(:placeholder-shown):invalid {
		color: var(--c-status-error);
	}
`
