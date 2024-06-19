import { Button, Container, Img, Logo, Title } from './style'

export function Header() {
	return (
		<Container>
			<Logo>
				<Img src='/iginite-logo.svg' />
				<Title>DT Money</Title>
			</Logo>

			<Button>Nova transação</Button>
		</Container>
	)
}
