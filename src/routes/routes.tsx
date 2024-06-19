import { useRoutes } from 'react-router-dom'
import { Home } from '../pages/Home/template'

export function Routes() {
	const element = useRoutes([
		{
			path: '/',
			element: <Home />
		}
	])

	return element
}
