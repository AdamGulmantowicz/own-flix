import React from 'react'
import GlobalStyle from '../common/globalStyles'

const Template = ({ children }) => {
	return (
		<>
			<GlobalStyle />
			{children}
		</>
	)
}

export default Template
