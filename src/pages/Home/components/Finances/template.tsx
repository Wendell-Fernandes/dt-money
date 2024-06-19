import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from '@phosphor-icons/react'
import { Box, Container, Name, Title, Value } from './styled'

export function Finances() {
	return (
		<Container>
			<Box color='gray'>
				<Title color='green'>
					<Name>Entradas</Name>
					<ArrowCircleUp size={32} />
				</Title>
				<Value>R$ 12.000,00</Value>
			</Box>

			<Box color='gray'>
				<Title color='red'>
					<Name>Saídas</Name>
					<ArrowCircleDown size={32} />
				</Title>
				<Value>R$ 12.000,00</Value>
			</Box>

			<Box color='green'>
				<Title color='white'>
					<Name>Total</Name>
					<CurrencyDollar size={32} />
				</Title>
				<Value>R$ 12.000,00</Value>
			</Box>
		</Container>
	)
}
