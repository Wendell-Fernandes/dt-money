import { Modal } from '../Modal/template'
import { Container, Img, Logo, Title } from './style'

export function Header() {
	return (
		<Container>
			<Logo>
				<Img src='/iginite-logo.svg' />
				<Title>DT Money</Title>
			</Logo>

			<Modal />
		</Container>
	)
}
