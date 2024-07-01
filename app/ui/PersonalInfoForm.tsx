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
import { FormWrapper } from './components';

const PersonalInfoForm = () => {
	const form = useFormContext();
	const { nextStep } = useWizard();

	const onSubmit = () => {
		nextStep();
	};

	return (
		<>
			<FormWrapper
				title='Personal Information'
				description={
					'Please provide your name, email address, and phone number.'
				}
			>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='flex flex-col mt-4 h-full space-y-4'
					>
						{/* Name Field */}
						<FormField
							control={form.control} // control is used to manage the form state and validation for the field.
							name='name'
							render={(
								{ field }, // Render the form field using the `FormField` component. Pass the field props to the `Input` component.
							) => (
								<FormItem>
									<FormLabel className='text-accent'>Name</FormLabel>
									<FormControl>
										<Input
											className='text-secondary-foreground bg-primary'
											placeholder='e.g. Stephen King'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						{/* Email field */}
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='text-accent'>Email</FormLabel>
									<FormControl>
										<Input
											className='text-secondary-foreground bg-primary'
											placeholder='e.g. stephenking@lorem.com'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						{/* Phone field */}
						<FormField
							control={form.control}
							name='phone'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='text-accent'>Phone Number</FormLabel>
									<FormControl>
										<PhoneInput
											placeholder='e.g. +1 234 567 890'
											className='text-secondary-foreground'
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</form>
				</Form>
			</FormWrapper>
		</>
	);
};

export default PersonalInfoForm;
