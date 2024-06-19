import { MagnifyingGlass } from '@phosphor-icons/react'
import { usePaginationContext } from '../../contexts/Pagination/context'
import { Button, Container, Input } from './style'

export function Search() {
	const { changeSearchTransactions, searchTransactions } = usePaginationContext()

	return (
		<Container>
			<Input
				placeholder='Busque uma transação'
				value={searchTransactions}
				onChange={changeSearchTransactions}
			/>
			<Button>
				<MagnifyingGlass
					size={20}
					weight='bold'
				/>
				Buscar
			</Button>
		</Container>
	)
}
