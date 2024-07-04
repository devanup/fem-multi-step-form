import { useFormContext } from 'react-hook-form';
import { useWizard } from 'react-use-wizard';
import clsx from 'clsx';

import { StepButtons, FormWrapper, StepIndicator } from './components';
import { Checkbox } from '@/components/ui/checkbox';
import {
	Form,
	FormField,
	FormControl,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';

const items = [
	{
		id: 'online-service',
		label: 'Online service',
		description: 'Access to multiplayer games',
		monthlyPrice: 1,
		yearlyPrice: 10,
	},
	{
		id: 'larger-storage',
		label: 'Larger Storage',
		description: 'Extra 1TB of cloud save',
		monthlyPrice: 2,
		yearlyPrice: 20,
	},
	{
		id: 'customizable-profile',
		label: 'Customizable Profile',
		description: 'Custom theme on your profile',
		monthlyPrice: 2,
		yearlyPrice: 20,
	},
];

export const PickAddons = () => {
	const form = useFormContext();
	const { nextStep } = useWizard();

	const onSubmit = () => {
		nextStep();
	};

	return (
		<>
			<StepIndicator />
			<FormWrapper
				title='Pick add-ons'
				description='Add-ons help enhance your gaming experience'
			>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='flex flex-col mt-4 h-full'
					>
						<FormField
							control={form.control}
							name='addons'
							render={() => (
								<FormItem>
									{items.map((item) => (
										<FormField
											key={item.id}
											control={form.control}
											name='addons'
											render={({ field }) => (
												// checkbox and label for each addon item
												<FormItem
													key={item.id}
													className={clsx(
														'flex flex-row items-center space-x-3 cursor-pointer border-muted border rounded p-6',
														{
															'border-border bg-muted': field.value?.includes(
																item.id,
															),
														},
													)}
												>
													{/* Checkbox */}
													<FormControl>
														<Checkbox
															checked={field.value?.includes(item.id)}
															onCheckedChange={(checked) => {
																return checked
																	? field.onChange([...field.value, item.id])
																	: field.onChange(
																			field.value?.filter(
																				(value: string) => value !== item.id,
																			),
																	  );
															}}
														/>
													</FormControl>
													{/* Label */}
													<FormLabel className='font-normal cursor-pointer flex w-full gap-1 !ml-6 '>
														<div className='flex flex-col basis-4/5 gap-2'>
															<p className='font-bold text-accent'>
																{item.label}
															</p>
															<p className='text-secondary-foreground/45'>
																{item.description}
															</p>
														</div>
														<p className='basis-1/5 self-center text-right text-border'>
															+$
															{form.getValues().billingYearly === false
																? item.monthlyPrice + '/mo'
																: item.yearlyPrice + '/yr'}
														</p>
													</FormLabel>
												</FormItem>
											)}
										/>
									))}
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
