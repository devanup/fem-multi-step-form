import Image from 'next/image';
import clsx from 'clsx';
import { useWizard } from 'react-use-wizard';

const StepIndicator = () => {
	const { activeStep } = useWizard();

	return (
		<div className='flex fixed text-background md:w-80 md:relative md:flex-col top-10 right-0 left-0 w-full justify-center md:justify-start md:top-0 md:p-8 gap-4 lg:py-12 lg:gap-6 xl:py-16'>
			<Image
				className='hidden md:block'
				src='/images/bg-sidebar-desktop.svg'
				alt='sidebar desktop'
				fill={true}
			/>
			<div className='flex gap-3'>
				<div
					className={clsx(
						'w-10 h-10 p-4 my-auto border border-background z-10 rounded-full flex justify-center items-center',
						{ 'bg-background text-foreground': activeStep + 1 === 1 },
					)}
				>
					1
				</div>
				<div className='z-20 hidden md:block flex-col uppercase'>
					<p className='text-muted'>Step 1</p>
					<p className='text-primary font-bold'>Your Info</p>
				</div>
			</div>
			<div className='flex gap-3'>
				<div
					className={clsx(
						'w-10 h-10 p-4 my-auto border border-background z-10 rounded-full flex justify-center items-center',
						{ 'bg-background text-foreground': activeStep + 1 === 2 },
					)}
				>
					2
				</div>
				<div className='z-20 hidden md:block flex-col uppercase'>
					<p className='text-muted'>Step 2</p>
					<p className='text-primary font-bold'>Select Plan</p>
				</div>
			</div>
			<div className='flex gap-3'>
				<div
					className={clsx(
						'w-10 h-10 p-4 my-auto border border-background z-10 rounded-full flex justify-center items-center',
						{ 'bg-background text-foreground': activeStep + 1 === 3 },
					)}
				>
					3
				</div>
				<div className='z-20 hidden md:block flex-col uppercase'>
					<p className='text-muted'>Step 3</p>
					<p className='text-primary font-bold'>Add-Ons</p>
				</div>
			</div>
			<div className='flex gap-3'>
				<div className='w-10 h-10 p-4 my-auto border border-background z-10 rounded-full flex justify-center items-center'>
					4
				</div>
				<div className='z-20 hidden md:block flex-cols uppercase'>
					<p className='text-muted'>Step 4</p>
					<p className='text-primary font-bold'>Summary</p>
				</div>
			</div>
		</div>
	);
};

export default StepIndicator;
