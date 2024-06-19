import { Finances } from './components/Finances/template'
import { Header } from './components/Header/template'
import { Search } from './components/Search/template'
import { Transactions } from './components/Transactions/template'
import { Providers } from './contexts/providers'
import { Container } from './style'

export function Home() {
	return (
		<Providers>
			<Container>
				<Header />
				<Finances />
				<Search />
				<Transactions />
			</Container>
		</Providers>
	)
}
