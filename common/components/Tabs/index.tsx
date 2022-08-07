import React, { FC } from 'react'
import type { ITabsProps } from './types'
import { StyledTabs, StyledTabsList } from './Tabs.styles'

const Tabs: FC<ITabsProps> = () => {
	return (
		<StyledTabs>
			<StyledTabsList></StyledTabsList>
		</StyledTabs>
	)
}

export default Tabs
