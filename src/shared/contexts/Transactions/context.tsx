import { useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../../../api/axios'
import type { IChildren, IData } from '../../types/global'
import type { ICreateTransaction, ITransactionContext } from './types'

export const TransactionsContext = createContext({} as ITransactionContext)

export function TransactionsProvider({ children }: IChildren) {
	const [transactions, setTrasactions] = useState<IData[]>([])

	async function getTransactionsData() {
		const response = await api.get('transactions', {
			params: {
				_sort: 'date'
			}
		})
		setTrasactions(response.data)
	}

	async function createTransaction(data: ICreateTransaction) {
		const { description, price, category, type } = data
		const response = await api.post('transactions', {
			description,
			price,
			category,
			type,
			date: new Date()
		})

		setTrasactions((state) => [...state, response.data])
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		getTransactionsData()
	}, [])

	return (
		<TransactionsContext.Provider value={{ transactions, createTransaction }}>{children}</TransactionsContext.Provider>
	)
}
