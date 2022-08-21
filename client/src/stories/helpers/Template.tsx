import { FC, PropsWithChildren } from 'react'
import GlobalStyles from '../../common/styles/globalStyles'

const Template: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div>
			<GlobalStyles />
			{children}
		</div>
	)
}

export default Template
