import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { dark } from '../appearances/themes/dark'
import type { IChildren } from '../typings/global'

export function Providers({ children }: IChildren) {
	return (
		<BrowserRouter>
			<ThemeProvider theme={dark}>{children}</ThemeProvider>
		</BrowserRouter>
	)
}
