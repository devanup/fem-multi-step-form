import { useFormContext } from 'react-hook-form';
import { FormWrapper, StepIndicator } from '.';
import { useWizard } from 'react-use-wizard';

const items = [
	{
		id: 'online-service',
		label: 'Online service',
		description: 'Access to multiplayer games',
		monthlyPrice: 10,
		yearlyPrice: 10,
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
			{/* <FormWrapper>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)}></form>
				</Form>
			</FormWrapper> */}
		</>
	);
};
