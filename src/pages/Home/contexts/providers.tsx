import type { IChildren } from '../../../shared/types/global'
import { PaginationProvider } from './Pagination/context'

export function Providers({ children }: IChildren) {
	return <PaginationProvider>{children}</PaginationProvider>
}
