import React, { FC, useEffect, useState } from 'react'
import type { ITabsProps } from './types'
import { StyledTabs, StyledTabsTitleWrap, StyledTabTitle } from './Tabs.styles'
import Text from '../Text'

const Tabs: FC<ITabsProps> = ({ initialActive, onChange, children }) => {
	const [active, setActive] = useState<string | undefined>(initialActive)

	useEffect(() => {
		if (onChange) onChange(active)
	}, [active, onChange])

	return (
		<StyledTabs>
			<StyledTabsTitleWrap>
				{React.Children.map(children, child => {
					if (!React.isValidElement(child)) return child

					return (
						<StyledTabTitle
							active={child.props.id && child.props.id === active}
							secondary={child.props.id && child.props.id === active}
							onClick={() => setActive(child.props.id)}
						>
							{child.props.title}
						</StyledTabTitle>
					)
				})}
			</StyledTabsTitleWrap>

			{React.Children.map(children, child => {
				if (!React.isValidElement(child)) return child

				return React.cloneElement(child, {
					active: child.props.id && child.props.id === active,
				})
			})}
		</StyledTabs>
	)
}

export default Tabs
