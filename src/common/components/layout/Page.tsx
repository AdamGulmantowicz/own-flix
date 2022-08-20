import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import Menu from '@components/Menu'

interface IPageProps {
	paddingTop?: boolean
}

const StyledPage = styled.div<IPageProps>`
	padding: ${({ paddingTop }) => (paddingTop ? 'var(--f45)' : '0')} var(--f24) 0;
	background: var(--c-purple-30);
`

export const Page: FC<PropsWithChildren<IPageProps>> = ({
	paddingTop,
	children,
}) => {
	return (
		<StyledPage paddingTop={paddingTop}>
			{children}
			<Menu pathname="home" />
		</StyledPage>
	)
}
