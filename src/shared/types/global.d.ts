import type { ReactNode } from 'react'

export interface IChildren {
	children: ReactNode
}

export interface IData {
	id: number
	description: string
	price: number
	category: string
	type: 'income' | 'outcome'
	date: string
}
