import { useControls } from './script'
import { ArrowLeft, ArrowRight, Container, IconButton, Page, Pages } from './style'

export function Controls() {
	const { pages_array, page_number, navigatePage, nextPage, previousPage } = useControls()

	return (
		<Container>
			<IconButton onClick={previousPage}>
				<ArrowLeft size={24} />
			</IconButton>
			<Pages>
				{pages_array.map((e) =>
					page_number === e ? (
						<Page
							key={e}
							onClick={navigatePage}
							className='selected'>
							{e}
						</Page>
					) : (
						<Page
							key={e}
							onClick={navigatePage}>
							{e}
						</Page>
					)
				)}
			</Pages>
			<IconButton onClick={nextPage}>
				<ArrowRight size={24} />
			</IconButton>
		</Container>
	)
}
