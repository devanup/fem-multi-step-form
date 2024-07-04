import { Form } from '@/components/ui/form';
import { FormWrapper, StepButtons, StepIndicator } from '.';
import { useFormContext } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { useWizard } from 'react-use-wizard';
import { Separator } from '@/components/ui/separator';
import { calculator } from '@/lib/calculator';

export const FinishingUp = () => {
	const form = useFormContext();
	const { goToStep } = useWizard();
	const { billingYearly, plan, addons } = form.getValues();

	const { planName, planPrice, addonsArray, fullPrice } = calculator(
		addons,
		plan,
		billingYearly,
	);
	return (
		<>
			<StepIndicator />
			<FormWrapper
				title='Finishing up'
				description='Double-check everything looks OK before confirming.'
			>
				<div className='flex flex-col bg-background text-foreground w-full p-4 mt-4 rounded-md'>
					<div className='flex w-full'>
						<div className='flex flex-col basis-4/5 text-left space-y-2'>
							<p className='font-semibold text-accent'>{planName}</p>
							<Button
								variant={'link'}
								className='w-fit h-auto p-0 justify-start text-muted-foreground font-normal hover:text-border'
								onClick={() => goToStep(1)}
							>
								Change
							</Button>
						</div>
						<p className='flex basis-1/5 justify-end my-auto text-accent font-semibold'>
							{planPrice}
						</p>
					</div>
					{addonsArray.length ? (
						<>
							<Separator className='bg-foreground/15 my-4' />
							{addonsArray.map((addonInfo, index) => (
								<div className='flex w-full my-2'>
									<p className='flex basis-4/5 text-muted-foreground'>
										{addonInfo.title}
									</p>
									<p className='flex basis-1/5 justify-end text-accent'>
										{addonInfo.price}
									</p>
								</div>
							))}
						</>
					) : (
						<></>
					)}
				</div>
				<div className='px-4 w-full flex justify-between'>
					<p className='basis-4/5'>
						Total {billingYearly ? '(Yearly)' : '(Monthly)'}
					</p>
					<p className='font-semibold text-border'>{fullPrice}</p>
				</div>
				<StepButtons />
			</FormWrapper>
		</>
	);
};
