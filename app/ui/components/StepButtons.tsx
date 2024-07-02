import { Button } from '@/components/ui/button';
import { useFormContext } from 'react-hook-form';
import { useWizard } from 'react-use-wizard';

const StepButtons = () => {
	const { nextStep, previousStep, isFirstStep, activeStep } = useWizard();
	const form = useFormContext();

	if (isFirstStep) {
		return (
			<div className='bottom-0 right-0 left-0 fixed bg-primary w-full justify-end p-4 flex md:relative md:mt-auto'>
				<Button
					type='submit'
					variant={'secondary'}
					className='bg-primary-foreground text-primary hover:bg-[#164A8A]'
				>
					Next Step
				</Button>
			</div>
		);
	}
	return (
		<>
			<div className='fixed bottom-0 right-0 left-0 bg-primary w-full justify-between p-4 flex md:relative md:mt-auto z-50'>
				<Button
					onClick={previousStep}
					disabled={form.formState.errors.plan ? true : false} // Disable the button if there are errors in the form. plan is the name of the field that is being validated.
					variant={'link'}
					className='text-muted-foreground'
				>
					Back
				</Button>
				{activeStep === 3 ? (
					<Button onClick={() => nextStep()} variant={'secondary'}>
						Confirm
					</Button>
				) : (
					<Button type='submit' variant={'secondary'}>
						Next
					</Button>
				)}
			</div>
		</>
	);
};

export default StepButtons;
