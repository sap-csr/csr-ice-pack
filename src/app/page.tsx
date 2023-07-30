import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import CardNews from './components/CardNews';
import CardNewsLocation from './components/CardNewsLocation';
import YoutubeCard from './components/YoutubeCard';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<div className='w-full bg-white'>
			<Navbar />
			<main className='flex flex-col justify-center items-center py-10'>
				<CardNews />
				<CardNewsLocation />
				<YoutubeCard href='https://www.youtube.com/embed/Pf1fMbGCDGI' />

				<section className='w-3/4 bg-gray-50 shadow-lg p-5 rounded-lg mt-5'>
					<p className='text-center text-gray-300 text-sm mb-3'>해시태그 업데이트 주기는 72h 입니다.</p>
					<div className='sk-ww-linkedin-hashtag-posts' data-embed-id='173384'></div>
					<script src='https://widgets.sociablekit.com/linkedin-hashtag-posts/widget.js' async defer></script>
				</section>

				<section className='w-3/4 bg-gray-50 shadow-lg p-5 rounded-lg mt-5'>
					<script src='https://snapwidget.com/js/snapwidget.js'></script>
					<iframe src='https://snapwidget.com/embed/1039024' className='snapwidget-widget w-full'></iframe>
				</section>


				<Footer />
			</main>
		</div>
	);
}
