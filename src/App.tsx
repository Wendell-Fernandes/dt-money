import { Routes } from './routes/routes'
import { Providers } from './shared/contexts/providers'
import { GlobalStyle } from './shared/styles/global.style'

export function App() {
	return (
		<Providers>
			<GlobalStyle />
			<Routes />
		</Providers>
	)
}
