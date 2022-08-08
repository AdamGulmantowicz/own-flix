import { FC, PropsWithChildren } from 'react'
import { StyledTabTitle } from '../Tabs.styles'

interface ITabProps extends PropsWithChildren {
	active?: boolean
	id?: string
	title: string
}

const Tab: FC<ITabProps> = ({ active, children }) => {
	return <>{active && children}</>
}

export default Tab
