import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import * as zod from 'zod'
import { PaginationContext } from '../../contexts/Pagination/context'

export const schema = zod.object({
	query: zod.string()
})

export type SchemaType = zod.infer<typeof schema>

export function useSearch() {
	const navigate = useNavigate()
	const searchIncludes = useContextSelector(PaginationContext, (context) => context.searchIncludes)
	const { register, handleSubmit, setValue, watch } = useForm<SchemaType>({
		resolver: zodResolver(schema),
		defaultValues: {
			query: ''
		}
	})

	const queryField = watch('query')
	const isDisabled = queryField.length === 0

	function searchTransaction(data: SchemaType) {
		const { query } = data
		// navigate('/?page_number=1&page_size=5')
		searchIncludes(query)
	}

	function clearInput() {
		navigate('/?page_number=1&page_size=5')
		setValue('query', '')
	}

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (queryField.length === 0) searchIncludes('')
	}, [queryField])

	return { searchTransaction, register, handleSubmit, clearInput, isDisabled }
}
