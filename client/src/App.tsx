import { useState } from 'react'
import Button from '@components/Button'
import GlobalStyle from './common/styles/globalStyles'
import { Page } from '@components/layout'
import Heading from '@components/Heading'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<GlobalStyle />
			<Page>
				<Heading secondary>Welcome in OwnFlix!</Heading>
				<Button>Hi!</Button>
			</Page>
		</>
	)
}

export default App
