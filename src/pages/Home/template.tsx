import { Header } from '../../shared/components/Header/template'
import { Pagination } from './components/Pagination/template'
import { Search } from './components/Search/template'
import { Summary } from './components/Summary/template'
import { Providers } from './contexts/providers'
import { Container } from './style'

export function Home() {
	return (
		<Container>
			<Header />
			<Summary />
			<Providers>
				<Search />
				<Pagination />
			</Providers>
		</Container>
	)
}
