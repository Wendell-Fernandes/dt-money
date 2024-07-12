import type { IData } from '../../../../shared/types/global'

export interface IPaginationContext {
	end: number
	start: number
	page_size: string
	filtered: IData[]
	page_number: string
	searchIncludes: (query: string) => void
}

export type ICallback = (context: Context<IPaginationContext>) => {
	end?: number
	start?: number
	filtered?: IData[]
	page_size?: string
	page_number?: string
	searchIncludes?: (query: string) => void
}
