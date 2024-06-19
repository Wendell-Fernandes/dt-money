export interface IPaginationContext {
	searchTransactions: string
	data: string[]
	changeSearchTransactions: (event: ChangeEvent) => void
	filtered: string[]
	page_number: string
	page_size: string
	start: number
	end: number
}
