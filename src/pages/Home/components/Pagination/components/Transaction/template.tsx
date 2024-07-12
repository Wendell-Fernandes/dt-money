import type { IData } from '../../../../../../shared/types/global'
import { dateFormatter, priceFormatter } from '../../../../../../shared/utils/formatter'
import { Category, Container, Day, Description, Price } from './style'

interface ITransaction {
	data: IData
}

export function Transaction({ data }: ITransaction) {
	const { description, category, date, price, type } = data

	return (
		<Container>
			<Description>{description}</Description>
			<Price type={type}>
				{type === 'outcome' && '- '}
				{priceFormatter.format(price)}
			</Price>
			<Category>{category}</Category>
			<Day>{dateFormatter.format(new Date(date))}</Day>
		</Container>
	)
}
