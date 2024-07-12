import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { Controller } from 'react-hook-form'
import { useModal } from './script'
import { BoxButtons, ButtonType, Close, Content, Form, Input, Overlay, Submit, Title, Trigger } from './style'

export function Modal() {
	const { register, handleSubmit, handleNewTrasaction, isSubmitting, control, handleIsModalOpen, isModalOpen } =
		useModal()

	return (
		<Dialog.Root open={isModalOpen}>
			<Trigger onClick={handleIsModalOpen}>Nova transação</Trigger>

			<Dialog.Portal>
				<Overlay onClick={handleIsModalOpen} />
				<Content>
					<Title>Nova transação</Title>
					<Form onSubmit={handleSubmit(handleNewTrasaction)}>
						<Input
							placeholder='Descrição'
							{...register('description')}
						/>
						<Input
							type='number'
							placeholder='Preço'
							{...register('price', { valueAsNumber: true })}
						/>
						<Input
							placeholder='Categoria'
							{...register('category')}
						/>

						<Controller
							control={control}
							name='type'
							render={({ field }) => {
								return (
									<BoxButtons
										onValueChange={field.onChange}
										value={field.value}>
										<ButtonType
											variant='income'
											value='income'>
											<ArrowCircleUp size={24} />
											Entrada
										</ButtonType>
										<ButtonType
											variant='outcome'
											value='outcome'>
											<ArrowCircleDown size={24} />
											Saída
										</ButtonType>
									</BoxButtons>
								)
							}}
						/>

						<Submit
							type='submit'
							disabled={isSubmitting}>
							Cadastrar
						</Submit>
					</Form>
					<Close onClick={handleIsModalOpen}>
						<X size={24} />
					</Close>
				</Content>
			</Dialog.Portal>
		</Dialog.Root>
	)
}
