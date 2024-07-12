import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider as HookFormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import type { IChildren } from '../../types/global'

export const schema = zod.object({
	description: zod.string(),
	price: zod.number(),
	category: zod.string(),
	type: zod.enum(['income', 'outcome'])
})

export type SchemaType = zod.infer<typeof schema>

export function FormProvider({ children }: IChildren) {
	const methods = useForm<SchemaType>({
		resolver: zodResolver(schema),
		defaultValues: {
			description: '',
			price: undefined,
			category: '',
			type: 'income'
		}
	})

	return <HookFormProvider {...methods}>{children}</HookFormProvider>
}
