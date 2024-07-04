import Image from 'next/image';
import { FormWrapper, StepIndicator } from '.';
import { Button } from '@/components/ui/button';
import { useWizard } from 'react-use-wizard';

export const ThankYou = () => {
	const goToStep = useWizard();
	return (
		<>
			<StepIndicator />
			<FormWrapper>
				<div className='flex flex-col justify-center items-center py-10 px-6 gap-3'>
					<Image
						src='/icons/icon-thank-you.svg'
						alt='Thank you check icon'
						width={60}
						height={60}
					/>
					<h1 className='font-bold text-2xl text-primary-foreground'>
						Thank you!
					</h1>
					<p className='text-center w-[80%]'>
						Thanks for confirming your subscription! We hope you have fun using
						our platform. If you ever need support, please feel free to email us
						at support@loremgaming.com.
					</p>
				</div>
			</FormWrapper>
		</>
	);
};
