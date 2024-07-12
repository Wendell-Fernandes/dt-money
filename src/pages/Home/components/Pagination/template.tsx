import { Controls } from './components/Controls/template'
import { Transaction } from './components/Transaction/template'
import { usePaginationComponent } from './script'
import { BoxTransactions, Container } from './style'

export function Pagination() {
	const { entries } = usePaginationComponent()

	return (
		<Container>
			<BoxTransactions>
				{entries.map((e) => (
					<Transaction
						key={e.id}
						data={e}
					/>
				))}
			</BoxTransactions>
			<Controls />
		</Container>
	)
}
