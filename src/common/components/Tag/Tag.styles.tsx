import styled from 'styled-components'
import { ITagProps } from '.'
import Text from '../Text'

export const StyledTag = styled(Text)<Pick<ITagProps, 'wide'>>`
	display: inline-block;
	color: var(--c-gray-20);
	backdrop-filter: var(--bf-blur-50);
	background: var(--c-gray-60);

	${({ wide }) =>
		wide
			? `
    padding: var(--f4) var(--f12);
    color: var(--c-gray-45);
    border-radius: var(--br-15);
  `
			: `
  	padding: var(--f3) var(--f6);
    border-radius: var(--br-5);
  `}
`
