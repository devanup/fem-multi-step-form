import { useFormContext } from 'react-hook-form';
import { useWizard } from 'react-use-wizard';

import {
	Form,
	FormField,
	FormControl,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PhoneInput } from '@/components/ui/phone-input';
import { StepButtons, StepIndicator, FormWrapper } from './components';

export const PersonalInfoForm = () => {
	const form = useFormContext();
	const { nextStep } = useWizard();

	const onSubmit = () => {
		nextStep();
		console.log('nextStep', nextStep.length);
	};

	return (
		<>
			<StepIndicator />
			<FormWrapper
				title='Personal Information'
				description={
					'Please provide your name, email address, and phone number.'
				}
			>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='flex flex-col mt-4 h-full space-y-6'
					>
						{/* Name Field */}
						<FormField
							control={form.control} // control is used to manage the form state and validation for the field.
							name='name'
							render={(
								{ field }, // Render the form field using the `FormField` component. Pass the field props to the `Input` component.
							) => (
								<FormItem>
									<div className='flex justify-between items-center'>
										<FormLabel className='text-accent font-normal'>
											Name
										</FormLabel>
										<FormMessage />
									</div>
									<FormControl>
										<Input
											className='text-secondary-foreground bg-primary'
											placeholder='e.g. Stephen King'
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<div className='flex justify-between items-center'>
										<FormLabel className='text-accent font-normal'>
											Email Address
										</FormLabel>
										<FormMessage />
									</div>
									<FormControl>
										<Input
											type='email'
											className='text-secondary-foreground bg-primary'
											placeholder='e.g. stephenking@lorem.com'
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						{/* Phone field */}
						<FormField
							control={form.control}
							name='phone'
							render={({ field }) => (
								<FormItem>
									<div className='flex justify-between items-center'>
										<FormLabel className='text-accent font-normal'>
											Phone Number
										</FormLabel>
										<FormMessage />
									</div>
									<FormControl>
										<PhoneInput
											placeholder='e.g. +1 234 567 890'
											className='text-secondary-foreground'
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<StepButtons />
					</form>
				</Form>
			</FormWrapper>
		</>
	);
};
