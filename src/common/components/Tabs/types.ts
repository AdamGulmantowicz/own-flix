import { PropsWithChildren } from 'react'

export interface ITabsProps extends PropsWithChildren {
	onChange?: (index: string | undefined) => void
	initialActive?: string
}
