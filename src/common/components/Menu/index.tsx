import React, { FC } from 'react'
import type { IMenuProps } from './types'
import { StyledMenu, StyledMenuList, StyledMenuListItem } from './Menu.styles'
import {
	AccountIcon,
	HomeIcon,
	HomeIconFill,
	PlayIcon,
	PlayIconFill,
} from '@components/Icons'

const Menu: FC<IMenuProps> = ({ pathname }) => {
	return (
		<StyledMenu>
			<StyledMenuList>
				<StyledMenuListItem>
					{pathname === 'home' ? <HomeIconFill /> : <HomeIcon />}
				</StyledMenuListItem>
				<StyledMenuListItem>
					{pathname === 'search' ? <PlayIconFill /> : <PlayIcon />}
				</StyledMenuListItem>
				<StyledMenuListItem>
					{pathname === 'account' ? <AccountIcon /> : <AccountIcon />}
				</StyledMenuListItem>
			</StyledMenuList>
		</StyledMenu>
	)
}

export default Menu
