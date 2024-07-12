import { useContextSelector } from 'use-context-selector'
import { PaginationContext } from '../../contexts/Pagination/context'

export function usePaginationComponent() {
	const { filtered, end, start } = useContextSelector(PaginationContext, (context) => context)

	const entries = filtered.slice(start, end) //data to be displayed

	return {
		entries
	}
}
