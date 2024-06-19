import { Routes } from './routes/routes'
import { GlobalStyle } from './shared/appearances/styles/global.style'
import { Providers } from './shared/contexts/providers'

export function App() {
	return (
		<Providers>
			<GlobalStyle />
			<Routes />
		</Providers>
	)
}
