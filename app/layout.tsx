import type { Metadata } from 'next';
import { Ubuntu } from 'next/font/google';
import './globals.css';
import Image from 'next/image';

const ubuntu = Ubuntu({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
	title: 'Multi-step form',
	description: 'A multi-step form built with TypeScript, Next.js and chadcn/ui',
	authors: [{ name: 'Anup Thapa', url: 'https://github.com/devanup' }],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={` ${ubuntu.className}`}>
				<main className='bg-[#EFF5FF] flex flex-col min-h-screen'>
					<div className='h-40 relative md:hidden'>
						<Image
							fill // fill stands for object-fit: fill. It stretches the image to fit the container.
							className='md:hidden object-cover'
							src={'/images/bg-sidebar-mobile.svg'}
							alt={'bg-sidebar-mobile'}
							priority // Set to true. This tells Next.js to load the image as a priority. Lazy loading is disabled for images with the priority attribute.
						/>
					</div>
					<div className='absolute top-24 left-0 right-0 md:relative md:top-10 md:self-center'>
						{children}
					</div>
				</main>
			</body>
		</html>
	);
}
