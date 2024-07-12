import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { dark } from '../themes/dark'
import type { IChildren } from '../types/global'
import { FormProvider } from './Form/context'
import { TransactionsProvider } from './Transactions/context'

export function Providers({ children }: IChildren) {
	return (
		<BrowserRouter>
			<ThemeProvider theme={dark}>
				<FormProvider>
					<TransactionsProvider>{children}</TransactionsProvider>
				</FormProvider>
			</ThemeProvider>
		</BrowserRouter>
	)
}
