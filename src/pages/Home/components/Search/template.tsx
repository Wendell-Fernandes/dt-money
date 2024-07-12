import { MagnifyingGlass, X } from '@phosphor-icons/react'
import { useSearch } from './script'
import { BoxInput, ClearInput, Container, Input, Submit } from './style'

export function Search() {
	const { searchTransaction, register, handleSubmit, clearInput, isDisabled } = useSearch()

	return (
		<Container onSubmit={handleSubmit(searchTransaction)}>
			<BoxInput>
				<Input
					placeholder='Busque por transações'
					autoComplete='off'
					{...register('query')}
				/>
				<ClearInput
					onClick={clearInput}
					disabled={isDisabled}>
					<X size={20} />
				</ClearInput>
			</BoxInput>
			<Submit
				type='submit'
				disabled={isDisabled}>
				<MagnifyingGlass
					size={20}
					weight='bold'
				/>
				Buscar
			</Submit>
		</Container>
	)
}
