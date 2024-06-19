import { Category, Container, Day, Name, Value } from './styled'

export function Transaction() {
	return (
		<Container>
			<Name>Aluguel apartamento</Name>
			<Value color='red'>-R$ 1.000,00</Value>
			<Category>Casa</Category>
			<Day>14/06/2024</Day>
		</Container>
	)
}
