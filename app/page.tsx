'use client';

import { FormProvider, useForm } from 'react-hook-form'; // FormProvider to share the form context with the Wizard, useForm to create the form instance
import { z } from 'zod'; // zod to create the schema
import { zodResolver } from '@hookform/resolvers/zod'; // zodResolver to use the zod schema with react-hook-form
import { Wizard } from 'react-use-wizard'; // Wizard to create multi-step form
import { isValidPhoneNumber } from 'react-phone-number-input'; // isValidPhoneNumber to validate phone number
import { PersonalInfoForm, SelectPlanForm } from './ui';

// Define the form schema
const formSchema = z.object({
	name: z
		.string()
		.min(2, { message: 'Name must be at least 2 characters' })
		.max(50, { message: 'Name must be at most 50 characters' })
		.regex(/^[A-Za-z\s]+$/, {
			message: 'Name can only contain alphabetical characters',
		})
		.refine((value) => value.trim().length > 0, {
			message: 'Name cannot be just spaces',
		}),
	email: z.string().email(),
	phone: z
		.string()
		.refine(isValidPhoneNumber, { message: 'Invalid phone number' }),
	billingYearly: z.boolean(),
	plan: z.enum(['arcade', 'advanced', 'pro'], {
		errorMap: () => ({ message: 'Select a plan' }),
	}),
	addons: z.array(
		z
			.enum(['online-service', 'larger-storage', 'customizable-profile'])
			.optional(),
	),
});

export default function Home() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			phone: '',
			billingYearly: false,
			plan: 'arcade',
			addons: [],
		},
	});
	return (
		<>
			<div className='bg-primary m-4 p-4 text-primary-foreground rounded mb-20 md:flex'>
				<FormProvider {...form}>
					<Wizard>
						<PersonalInfoForm />
						<SelectPlanForm />
					</Wizard>
				</FormProvider>
			</div>
		</>
	);
}
