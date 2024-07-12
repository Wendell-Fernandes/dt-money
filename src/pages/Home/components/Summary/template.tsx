import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from '@phosphor-icons/react'
import { priceFormatter } from '../../../../shared/utils/formatter'
import { useSummary } from './script'
import { Box, Container, Name, Title, Value } from './style'

export function Summary() {
	const { summary } = useSummary()

	return (
		<Container>
			<Box color='gray'>
				<Title color='green'>
					<Name>Entradas</Name>
					<ArrowCircleUp size={32} />
				</Title>
				<Value>{priceFormatter.format(summary.income)}</Value>
			</Box>

			<Box color='gray'>
				<Title color='red'>
					<Name>Saídas</Name>
					<ArrowCircleDown size={32} />
				</Title>
				<Value>{priceFormatter.format(summary.outcome)}</Value>
			</Box>

			<Box color='green'>
				<Title color='white'>
					<Name>Total</Name>
					<CurrencyDollar size={32} />
				</Title>
				<Value>{priceFormatter.format(summary.total)}</Value>
			</Box>
		</Container>
	)
}
