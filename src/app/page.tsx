import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import CardNews from './components/CardNews';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className='flex flex-col w-full bg-white justify-center'>
			<Navbar />
			<CardNews />
			<script src='https://snapwidget.com/js/snapwidget.js'></script>
			<div className='w-full overflow-hidden h-auto pt-5 justify-center'>
				<iframe src='https://snapwidget.com/embed/1039024' className='snapwidget-widget w-full' allowTransparency></iframe>
			</div>
		</main>
	);
}
