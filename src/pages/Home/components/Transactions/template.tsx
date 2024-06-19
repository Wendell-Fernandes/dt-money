import { usePaginationContext } from '../../contexts/Pagination/context'
import { Controls } from './components/Controls/template'
import { BoxTransactions, Container } from './style'

export function Transactions() {
	const { filtered, end, start } = usePaginationContext()
	const entries = filtered.slice(start, end) //data to be displayed

	return (
		<Container>
			<BoxTransactions>
				{entries.map((e) => (
					<p key={e}>{e}</p>
				))}
			</BoxTransactions>
			<Controls />
		</Container>
	)
}
