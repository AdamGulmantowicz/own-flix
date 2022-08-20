import { FC, PropsWithChildren } from 'react'

interface ITabProps extends PropsWithChildren {
	active?: boolean
	id?: string
	title: string
}

const Tab: FC<ITabProps> = ({ active, children }) => {
	return <>{active && children}</>
}

export default Tab
