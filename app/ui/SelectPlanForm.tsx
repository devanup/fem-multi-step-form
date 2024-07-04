import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useWizard } from 'react-use-wizard';

import { FormWrapper, StepButtons, StepIndicator } from './components';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { ToggleGroup, ToggleGroupItem } from '@radix-ui/react-toggle-group';
import Image from 'next/image';
import clsx from 'clsx';

export const SelectPlanForm = () => {
	const form = useFormContext(); // getting the form context
	const { nextStep } = useWizard(); // getting the next step
	// console.log('nextStep', nextStep.length);
	const [billingYearly, setBillingYearly] = useState<boolean>(
		form.getValues().billingYearly, // getting the value of billingYearly from the form
	);

	const onSubmit = () => {
		nextStep(); // going to the next step on form submission
	};

	useEffect(() => {
		setBillingYearly(form.getValues().billingYearly); // setting the value of billingYearly from the form on component mount
	}, [form]);

	// plan options
	const items = [
		{
			label: 'Arcade',
			value: 'arcade',
			image: { src: '/icons/icon-arcade.svg', alt: 'arcade icon' },
			prices: {
				yearly: 90,
				monthly: 9,
			},
		},
		{
			label: 'Advanced',
			value: 'advanced',
			image: { src: '/icons/icon-advanced.svg', alt: 'advanced icon' },
			prices: {
				yearly: 120,
				monthly: 12,
			},
		},
		{
			label: 'Pro',
			value: 'pro',
			image: { src: '/icons/icon-pro.svg', alt: 'pro icon' },
			prices: {
				yearly: 150,
				monthly: 15,
			},
		},
	];

	return (
		<>
			<StepIndicator />
			<FormWrapper
				title='Select your plan'
				description='You have the option of monthly or yearly billing.'
			>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='flex flex-col mt-4 h-full'
					>
						<FormField
							control={form.control}
							name='plan'
							render={({ field }) => (
								<FormItem className='space-y-6 mb-5'>
									<FormControl>
										<ToggleGroup
											onValueChange={field.onChange}
											defaultValue={field.value}
											type='single'
											className='flex flex-col gap-2 lg:flex-row w-full'
										>
											{items.map((item) => (
												<FormItem
													key={item.value}
													className='flex items-center basis-1/3'
												>
													<FormControl>
														<ToggleGroupItem
															className='p-4 w-full border border-muted rounded data-[state=on]:bg-muted data-[state=on]:border-border flex gap-4 lg:flex-col'
															value={item.value}
														>
															<Image
																src={item.image.src}
																alt={item.image.alt}
																className='my-auto'
																width={40}
																height={40}
															/>
															<div className='flex flex-col my-auto text-left'>
																<p className='font-bold text-accent'>
																	{item.label}
																</p>
																<p className='text-muted-foreground'>{`$${
																	billingYearly
																		? `${item.prices.yearly}/yr`
																		: `${item.prices.monthly}/mo`
																}`}</p>
																{billingYearly && (
																	<p className='text-accent'>2 months free</p>
																)}
															</div>
														</ToggleGroupItem>
													</FormControl>
													<FormLabel className='sr-only'>
														{item.label}
													</FormLabel>
												</FormItem>
											))}
										</ToggleGroup>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name='billingYearly'
							render={({ field }) => (
								<FormItem className='flex flex-row items-center justify-between rounded-lg bg-background text-foreground p-4'>
									<FormLabel
										className={clsx('text-base', {
											'text-muted-foreground': billingYearly,
											'text-accent': !billingYearly,
										})}
									>
										Monthly
									</FormLabel>
									<FormControl>
										<Switch
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
									<FormLabel
										className={clsx('text-base', {
											'text-muted-foreground': !billingYearly,
											'text-accent': billingYearly,
										})}
									>
										Yearly
									</FormLabel>
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
