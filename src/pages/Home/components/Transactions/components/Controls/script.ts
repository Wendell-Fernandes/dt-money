import type { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePaginationContext } from '../../../../contexts/Pagination/context'

export function useControls() {
	const navigate = useNavigate()

	const { filtered, page_number, page_size } = usePaginationContext()

	const page_total = Math.ceil(filtered.length / Number(page_size)) //total pages
	const pages_array = Array(page_total)
		.fill('0')
		.map((_, i) => String(i + 1)) //array of pages

	function nextPage() {
		if (Number(page_number) + 1 > page_total) return
		navigate(`/?page_number=${Number(page_number) + 1}&page_size=${page_size}`)
	}

	function previousPage() {
		if (Number(page_number) - 1 < 1) return
		navigate(`/?page_number=${Number(page_number) - 1}&page_size=${page_size}`)
	}

	function navigatePage(event: MouseEvent) {
		//@ts-ignore
		const page = event?.target.textContent
		if (!page) return
		navigate(`/?page_number=${page}&page_size=${page_size}`)
	}

	return { pages_array, page_number, navigatePage, nextPage, previousPage }
}
