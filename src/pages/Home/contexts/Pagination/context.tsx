import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { createContext, useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../../../shared/contexts/Transactions/context'
import type { IChildren, IData } from '../../../../shared/types/global'
import type { IPaginationContext } from './types'

export const PaginationContext = createContext({} as IPaginationContext)

export function PaginationProvider({ children }: IChildren) {
	const { transactions } = useContextSelector(TransactionsContext, (context) => context)
	const [searchParams, setSearchParams] = useSearchParams()
	const [search, setSearch] = useState('')

	const page_number = searchParams.get('page_number') ?? '1' //page number in url
	const page_size = searchParams.get('page_size') ?? '5' //number of items in the url

	const start = (Number(page_number) - 1) * Number(page_size) //where to start showing the data
	const end = start + Number(page_size) //where you end up presenting the data

	const filtered = transactions.filter((e: IData) => e.description.includes(search) || e.category.includes(search)) //filtered data

	function searchIncludes(query: string) {
		setSearch(query)
	}

	useEffect(() => {
		setSearchParams({ page_number: page_number, page_size: page_size }) //add a start point if you don't have one
	}, [setSearchParams, page_number, page_size])

	return (
		<PaginationContext.Provider
			value={{
				end,
				start,
				filtered,
				page_size,
				page_number,
				searchIncludes
			}}>
			{children}
		</PaginationContext.Provider>
	)
}
