import { ArrowCircleDown, ArrowCircleUp } from '@phosphor-icons/react'
import {
	BoxButtons,
	BoxModal,
	BoxTextFields,
	Close,
	Fade,
	InputButton,
	OutputButton,
	SubmitButton,
	TextField,
	Title
} from './style'

export function Modal() {
	//@ts-ignore
	function teste(e) {
		const target = e.target
		target.classList.toggle('selected')
		console.log(target)
	}

	return (
		<>
			<Fade />
			<BoxModal>
				<Title>Nova transação</Title>
				<BoxTextFields>
					<TextField placeholder='Descrição' />
					<TextField placeholder='Preço' />
					<TextField placeholder='Categoria' />
				</BoxTextFields>
				<BoxButtons>
					<InputButton
						type='button'
						onClick={teste}>
						<ArrowCircleUp size={24} />
						Entrada
					</InputButton>
					<OutputButton
						onClick={teste}
						type='button'>
						<ArrowCircleDown size={24} />
						Saída
					</OutputButton>
				</BoxButtons>
				<SubmitButton>Cadastrar</SubmitButton>

				<Close size={24} />
			</BoxModal>
		</>
	)
}
