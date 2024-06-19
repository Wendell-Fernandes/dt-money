import type { IChildren } from '../../../shared/typings/global'
import { PaginationProvider } from './Pagination/context'

export function Providers({ children }: IChildren) {
	return <PaginationProvider>{children}</PaginationProvider>
}
