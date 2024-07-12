import type { IData } from '../../types/global'

interface ICreateTransaction {
	description: string
	price: number
	category: string
	type: 'income' | 'outcome' | undefined
}

export interface ITransactionContext {
	transactions: IData[]
	createTransaction: (data: ICreateTransaction) => Promise<void>
}
