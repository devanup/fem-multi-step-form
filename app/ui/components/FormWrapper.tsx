export const FormWrapper = ({
	children,
	title,
	description,
}: Readonly<{
	children: React.ReactNode;
	title?: string;
	description?: string;
}>) => {
	return (
		<div className='flex flex-col justify-center text-foreground md:ml-3 md:h-[680px] md:w-[320px] lg:w-[620px] lg:p-8 xl:w-[880px] xl:p-12 xl:gap-4 2xl:w-[1080px] '>
			{title && (
				<h1 className='font-bold text-2xl mt-4 text-primary-foreground'>
					{title}
				</h1>
			)}
			{description && (
				<p className='my-4 text-secondary-foreground/45'>{description}</p>
			)}
			{children}
		</div>
	);
};
/* 
{ children, title, description}: Readonly<{children: React.ReactNode;title: string;description: string;}>
What's going on in here is that we are destructuring the props object and we are using the Readonly type to make sure that the props object is not mutated. If Readonly is not used, the props object can be mutated and this can lead to bugs in the application.
*/
