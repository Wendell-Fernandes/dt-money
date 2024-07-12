import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useContextSelector } from 'use-context-selector'
import type { SchemaType } from '../../contexts/Form/context'
import { TransactionsContext } from '../../contexts/Transactions/context'

export function useModal() {
	const createTransaction = useContextSelector(TransactionsContext, (context) => context.createTransaction)

	const [isModalOpen, setIsModalOpen] = useState(false)

	const {
		control,
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting }
	} = useFormContext<SchemaType>()

	//@ts-ignore
	function handleIsModalOpen(event) {
		setIsModalOpen((state) => !state)
	}

	async function handleNewTrasaction(data: SchemaType) {
		await createTransaction(data)
		reset()
		setIsModalOpen(() => false)
	}

	return { register, handleSubmit, handleNewTrasaction, isSubmitting, control, handleIsModalOpen, isModalOpen }
}
