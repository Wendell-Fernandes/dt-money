import { createContext, useContext, useEffect, useState, type ChangeEvent } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import type { IChildren } from '../../../../shared/typings/global'
import type { IPaginationContext } from './types'

const PaginationContext = createContext({} as IPaginationContext)

const data = [
	'teste1',
	'teste2',
	'oi',
	'teste3',
	'teste4',
	'teste5',
	'teste6',
	'teste7',
	'teste8',
	'teste9',
	'teste10',
	'teste11',
	'teste12',
	'teste13',
	'teste14'
]

export function PaginationProvider({ children }: IChildren) {
	const navigate = useNavigate()
	const [searchParams, setSearchParams] = useSearchParams()

	const [searchTransactions, setSearchTransactions] = useState('')

	const page_number = searchParams.get('page_number') ?? '1' //page number in url
	const page_size = searchParams.get('page_size') ?? '5' //number of items in the url

	const start = (Number(page_number) - 1) * Number(page_size) //where to start showing the data
	const end = start + Number(page_size) //where you end up presenting the data

	const filtered = data.filter((e) => e.includes(searchTransactions)) //filtered data

	useEffect(() => {
		setSearchParams({ page_number: page_number, page_size: page_size }) //add a start point if you don't have one
	}, [setSearchParams, page_number, page_size])

	function changeSearchTransactions(event: ChangeEvent<HTMLInputElement>) {
		setSearchTransactions(event.target.value)
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <navigate is a library>
	useEffect(() => {
		if (searchTransactions.length === 0) return
		navigate('/?page_number=1&page_size=5')
	}, [searchTransactions])

	return (
		<PaginationContext.Provider
			value={{
				searchTransactions,
				end,
				data,
				start,
				filtered,
				page_size,
				page_number,
				changeSearchTransactions
			}}>
			{children}
		</PaginationContext.Provider>
	)
}

export function usePaginationContext() {
	return useContext(PaginationContext)
}
