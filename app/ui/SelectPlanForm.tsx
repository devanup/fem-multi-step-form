import React from 'react';
import { StepIndicator } from './components';
import { FormWrapper } from '.';
import { useFormContext } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { useWizard } from 'react-use-wizard';

export const SelectPlanForm = () => {
	const form = useFormContext();
	const { nextStep } = useWizard();
	console.log('nextStep', nextStep.length);
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
		<div>
			<StepIndicator />
			<FormWrapper
				title='Select Plan'
				description='You have the option of monthly or yearly billing.'
			>
				<Form {...form}>{''}</Form>
			</FormWrapper>
		</div>
	);
};
